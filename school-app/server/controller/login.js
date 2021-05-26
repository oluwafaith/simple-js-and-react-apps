import express from "express"
import bcrypt from "bcrypt"
import sql from "../database/postgres"
import jwt from "jsonwebtoken"
import { loginSchema } from "../utilities/user"

const secret = process.env.LOGIN_SECRET

async function login(data) {
    const { error, value } = loginSchema(data)
     if (error) {
         throw error
     }
    const { email, password } = value;
    const userExists = await sql`SELECT * FROM users WHERE email = ${email}`;
    
    if (!userExists[0]) {
        throw new Error("User does not exist");
    }

    const hashedPassword = userExists[0]["password"];

    const validPass = await bcrypt.compare(password, hashedPassword);

    if (!validPass) {
        res.status(400).send("Incorrect email or password");
    } else {
        const id = userExists[0].id;

        jwt.sign({
                id: id
            },
            secret,
            (err, token) => {
                if (err) {
                    throw new Error(err.message[0]);
                }
                res.header("auth-token", token);
            },
        );
    }
    
}
export default login