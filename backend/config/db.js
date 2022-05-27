require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASS,
  port: 5432,
});

module.exports = pool;
