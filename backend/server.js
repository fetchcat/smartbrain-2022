const PORT = process.env.PORT || 5000;

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/userRoutes");

app.listen(PORT, () => {
  console.log(`SmartBrain Backend is listening on port ${PORT}...`);
});

app.get("/", (req, res) => {
  res.send("This is working");
});

app.post("/signin", (req, res) => {
  res.json();
});

app.use("/api/users", userRoutes);
