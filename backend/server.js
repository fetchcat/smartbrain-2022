const PORT = process.env.PORT || 5000;

const connectDB = require("./config/db.js");

const express = require("express");

const app = express();

app.listen(PORT, () => {
  console.log(`SmartBrain Backend is listening on port ${PORT}...`);
});

app.get("/", (req, res) => {
  res.send("This is working");
});

app.post("/signin", (req, res) => {
  res.json();
});
