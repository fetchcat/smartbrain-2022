const express = require("express");
const router = express.Router();

const {
  getUsers,
  postNewUser,
  postLoginUser,
  putIncreaseEntriesUser,
  deleteUser,
} = require("../controllers/user");

// GET - All Users

router.route("/").get(getUsers);

// Delete - User by ID

router.route("/:id").delete(deleteUser);

// POST - New User

router.route("/register").post(postNewUser);

// POST - Login User

router.route("/login").post(postLoginUser);

// PUT - Update entries for user by ID

router.route("/update/:id").put(putIncreaseEntriesUser);

module.exports = router;
