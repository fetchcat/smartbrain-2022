require("dotenv").config();
require("./config/passport");

const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const userRoutes = require("./routes/user");
const visionRoutes = require("./routes/vision");

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    // Domain Whitelist
    origin: process.env.ORIGIN,
  })
);
// app.use(flash());
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(passport.initialize());
// app.use(passport.session());

// Routes

app.get("/", (req, res) => {
  res.json({ message: "SmartBrain API" });
});

app.use("/api/users", userRoutes);
app.use("/api/face", visionRoutes);

// Listen

app.listen(PORT, () => {
  console.log(`> SmartBrain API is listening on port ${PORT}...`);
});
