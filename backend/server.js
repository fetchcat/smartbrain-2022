const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/userRoutes");

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// Listen

app.listen(PORT, () => {
  console.log(`> SmartBrain API is listening on port ${PORT}...`);
});

// Root Route

app.get("/", (req, res) => {
  res.json({ message: "SmartBrain API" });
});

// User Routes

app.use("/api/users", userRoutes);
