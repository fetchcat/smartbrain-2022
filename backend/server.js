const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/user");
const visionRoutes = require("./routes/vision");

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // Domain Whitelist
    origin: process.env.ORIGIN,
  })
);

// Root Route

app.get("/", (req, res) => {
  res.json({ message: "SmartBrain API" });
});

// User Routes

app.use("/api/users", userRoutes);
app.use("/api/face", visionRoutes);

// Listen

app.listen(PORT, () => {
  console.log(`> SmartBrain API is listening on port ${PORT}...`);
});
