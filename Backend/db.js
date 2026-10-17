const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = pool;
pool
  .query("SELECT current_database() AS database")
  .then((result) => {
    console.log("Connected to PostgreSQL:", result.rows[0].database);
  })
  .catch((err) => {
    console.error("PostgreSQL connection failed:", err.message);
  });
