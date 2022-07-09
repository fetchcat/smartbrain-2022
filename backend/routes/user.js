const express = require("express");
const router = express.Router();
const passport = require("passport");

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

router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({
      message: "Authenticated",
    });
  }
);

// PUT - Update entries for user by ID

router.route("/update/:id").put(putIncreaseEntriesUser);

module.exports = router;
