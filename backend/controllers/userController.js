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

// const postNewUser = async (req, res) => {
//   const { email, name, password } = req.body;
//   const joined = new Date();
//   try {
//     bcrypt.hash(password, saltRounds, function (error, hash) {
//       if (error) {
//         throw new Error();
//       }
//       const res = await pool.query(
//         "INSERT INTO users (email, name, joined) VALUES ($1, $2, $3)",
//         [email, name, joined],
//         (error, result) => {
//           if (error) {
//             throw error;
//           }
//           res.status(201).json({ message: "User created successfully!" });
//           console.log(result);
//         }
//       );
//     });
//   } catch (error) {
//     res.status(400).json({ message: "Error creating new user" });
//     console.error(error.message);
//   }
// };

const postNewUser = async (req, res) => {
  const { email, name, password } = req.body;
  const joined = new Date();
  try {
    const user = await pool.query(
      "INSERT INTO users (email, name, joined) VALUES ($1, $2, $3)",
      [email, name, joined]
    );
    res.status(201).json({ message: `User ${email} created successfully!` });
    return user;
  } catch (error) {
    res.status(400).json({ message: "Error creating new user" });
    console.error(error.message);
  }
};

// POST - Login User

const postUserLogin = async (req, res) => {
  try {
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
};
