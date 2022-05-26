require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "smartbrain",
  host: "34.83.120.144",
  database: "smartbrain",
  password: "pp&kiYLG45sEcZ",
  port: 5432,
});

module.exports = pool;
