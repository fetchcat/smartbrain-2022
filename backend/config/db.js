require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASS,
  port: process.env.PORT,
});

module.exports = pool;
