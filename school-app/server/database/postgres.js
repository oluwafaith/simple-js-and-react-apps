import postgres from 'postgres';
import dotenv from "dotenv";

dotenv.config();


const POSTGRES_URL = process.env.DATABASE_URL;


const sql = postgres(POSTGRES_URL);

export default sql;