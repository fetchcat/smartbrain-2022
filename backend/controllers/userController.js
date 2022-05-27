const pool = require("../config/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

// GET - ALL USERS

const getUsers = async (req, res) => {
  try {
    await pool.query(
      "SELECT * FROM users ORDER BY id ASC",
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
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
    const user = await pool.query(
      "SELECT * IN users (email, name, joined, password) VALUES ($1, $2, $3, $4)",
      [email, name, joined, hash]
    );
    // const match = await bcrypt.compare(password, )
  } catch (error) {
    res.status(400).json({ message: "Error signing in" });
    console.error(error.message);
  }
};

// PUT - Modify User

// DELETE - Remove User

module.exports = {
  getUsers,
  postNewUser,
  postLoginUser,
};
