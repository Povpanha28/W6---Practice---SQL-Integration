import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create the pool using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "", // fallback to empty string if undefined
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export { pool };

