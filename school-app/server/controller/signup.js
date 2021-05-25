import sql from "../database/postgres";
import signupSchema from "../utilities/user"
import bcrypt from "bcrypt"
import randomstring from "randomstring";
import nodemailer from "nodemailer";


export async function signup(data) {
    const { error, value } = signupSchema(data);
    if (error) {
        throw error
    }

    const { email, password } = value;
    const userExists = await sql`SELECT * FROM users WHERE email = ${email}`;
    
     if (userExists[0]) {
         throw new Error("User already exists");
     }
    
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        throw Error("Authentication Failure");
      }

      const secretToken = randomstring.generate({
        length: 7,
        charset: "numeric",
      });

        const log = console.log;
      // Step 1
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      // Step 2
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "otp verification",
        text: secretToken,
      };

      // Step 3
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          return log("Error occurs");
        }
        return log("Email sent!!!");
      });
        
         const user = await sql`INSERT into users ( email, password, user_token, is_active ) VALUES( ${email},  ${hash}, ${secretToken}, ${false}) RETURNING *`;
         return user;
    })
}



