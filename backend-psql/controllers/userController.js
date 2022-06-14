const pool = require("../config/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

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
  const { email, name, password } = req.body;
  const joined = new Date();
  try {
    bcrypt.hash(password, saltRounds, async function (error, hash) {
      if (error) {
        console.error(error);
      }
      const user = await pool.query(
        "INSERT INTO users (email, name, joined, password) VALUES ($1, $2, $3, $4) RETURNING email",
        [email, name, joined, hash]
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
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const match = await bcrypt.compare(password, user.rows[0].password);

    if (match) {
      res
        .status(200)
        .json({ user: { email: user.rows[0].email, name: user.rows[0].name } });
    } else {
      res.status(400).json({ message: "Invalid login" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error signing in" });
    console.error(error.message);
  }
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
};
