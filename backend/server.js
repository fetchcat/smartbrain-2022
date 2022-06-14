require("dotenv").config();

// --- ENV VAR --- //

const port = process.env.PORT || 5000;

// --- MySQL DB --- //

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// --- Express --- //

const express = require("express");
const app = express();
const router = express.Router();

app.listen(port, () => {
  console.log(`> SmartBrain Backend listening on port: ${port}...`);
});

// --- Middleware --- //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Default Route --- //

app.get("/", (req, res) => {
  res.status(200).send("SmartBrain Backend").end();
});

// Test

app.get("/test", async (req, res) => {
  const sqlQuery = "SELECT * FROM users";
  const response = await connection.query(
    sqlQuery,
    function (err, results, fields) {
      console.log(results);
      console.log(fields);
    }
  );
  res.status(200).json(response);
});
