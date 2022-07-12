require("dotenv").config();

const Pool = require("pg").Pool;

// PostgreSQL Connection Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.PORT,
});

module.exports = pool;
