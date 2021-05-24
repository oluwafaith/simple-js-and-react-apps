import postgres from 'postgres';



const POSTGRES_URL = process.env.DATABASE_URL;


const sql = postgres(POSTGRES_URL);

module.exports =  sql;