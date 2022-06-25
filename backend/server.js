require("dotenv").config();

const PORT = process.env.PORT || 5000;

const pool = require("./config/db");

const express = require("express");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/user");
const visionRoutes = require("./routes/vision");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require("./middleware/auth");

const initializePassport = require("./config/passport");
initializePassport(
  passport,
  async function getUserByEmail(email) {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return user;
  },
  async function getUserById(id) {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return user;
  }
);

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    // Domain Whitelist
    origin: process.env.ORIGIN,
  })
);
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Passport

app.use(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/fail",
    failureFlash: true,
  })
);

// Routes

app.get("/", checkAuthenticated, (req, res) => {
  res.json({ message: "SmartBrain API" });
});

app.post("/login", checkNotAuthenticated, (req, res) => {
  res.json({ message: "SmartBrain API" });
});

app.get("/success", (req, res) => {
  res.json({ message: "Login Success", session: req.session });
});

app.get("/fail", (req, res) => {
  res.json({ message: "Login Failure" });
});

app.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.use("/api/users", userRoutes);
app.use("/api/face", visionRoutes);

// Listen

app.listen(PORT, () => {
  console.log(`> SmartBrain API is listening on port ${PORT}...`);
});
