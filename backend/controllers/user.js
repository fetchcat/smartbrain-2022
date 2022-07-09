const pool = require("../config/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

// const passport = require("passport");

// Passport - Local Strategy

// const initializePassport = require("../config/passport");
// initializePassport(
//   passport,
//   async function getUserByEmail(email) {
//     const user = await pool.query("SELECT * FROM users WHERE email = $1", [
//       email,
//     ]);
//     return user;
//   },
//   async function getUserById(id) {
//     const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
//     return user;
//   }
// );

// GET - ALL USERS

const getUsers = async (req, res) => {
  try {
    const users = await pool.query(
      "SELECT id, name, email, entries, joined FROM users ORDER BY id ASC"
    );
    res.json(users.rows);
  } catch {
    res.status(400).json({ message: "Cannot fetch users from database" });
  }
};

// POST - New User

const postNewUser = async (req, res) => {
  const { email, firstname, lastname, password } = req.body;
  const joined = new Date();
  try {
    bcrypt.hash(password, saltRounds, async function (error, hash) {
      if (error) {
        console.error(error);
      }
      const user = await pool.query(
        "INSERT INTO users (email, firstname, lastname, joined, password) VALUES ($1, $2, $3, $4, $5) RETURNING email",
        [email, firstname, lastname, joined, hash]
      );
      const newUser = user.rows[0].email;

      res
        .status(201)
        .json({ message: `User ${newUser} created successfully!` });
    });
  } catch (error) {
    res.status(400).json({ message: "Error creating new user" });
    console.error(error.message);
  }
};

// POST - Login User

const postLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    // Make sure user exists before checking PW

    if (user.rows.length > 0) {
      const match = await bcrypt.compare(password, user.rows[0].password);
      if (match) {
        // Generate JWT
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);

        const token = await jwt.sign(
          {
            email: email,
            id: user.rows[0].id,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
          },
          process.env.JWT_SECRET
        );

        // Return User with Token
        res.status(200).json({
          user: {
            email: user.rows[0].email,
            name: user.rows[0].name,
            entries: user.rows[0].entries,
            token: `Bearer ${token}`,
          },
        });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.status(400).json({ message: "No User found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error signing in" });
    console.error(error.message);
  }
};

const getLoginSuccess = async (req, res) => {
  if (req.session.passport.user) {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      req.session.passport.user,
    ]);

    res.status(200).json({
      message: "Authenticated",
      user: {
        id: user.rows[0].id,
        firstname: user.rows[0].firstname,
        lastname: user.rows[0].lastname,
        email: user.rows[0].email,
        entries: user.rows[0].entries,
        joined: user.rows[0].joined,
      },
    });
  } else {
    res.status(401).json({ message: "Unauthorized Request" });
  }
};

const getLoginFail = async (req, res) => {
  res.status(401).json({ message: "Unauthorized Request" });
};

// PUT - Modify User by ID

const putIncreaseEntriesUser = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await pool.query(
      "UPDATE users SET entries = entries + 1 WHERE id = $1",
      [id]
    );
    if (entry.rowCount === 1) {
      res.json({ message: "Entry incremented successfully" });
    } else {
      res.json({ message: "No user found" });
    }
  } catch (error) {
    console.error(error);
  }
};

// DELETE - Remove User by ID

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    if (user.rowCount === 1) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.json({ message: "No user found" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  postNewUser,
  postLoginUser,
  putIncreaseEntriesUser,
  deleteUser,
  getLoginSuccess,
  getLoginFail,
};
