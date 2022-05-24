require("dotenv").config();

const knex = require("knex");

knex({
  client: "pg",
  version: "7.2",
  connection: {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
  },
});

const db = knex(connectDB);

module.exports = db;
