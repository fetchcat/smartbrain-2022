const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

// const {
//   checkAuthenticated,
//   checkNotAuthenticated,
//   getLogout,
// } = require("../middleware/auth");

const {
  getUsers,
  postNewUser,
  postLoginUser,
  putIncreaseEntriesUser,
  deleteUser,
  getLoginSuccess,
  getLoginFail,
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

// GET - Passport Login

// router.use(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/api/users/success",
//     failureRedirect: "/api/users/fail",
//     failureFlash: true,
//   })
// );

// GET - Log Out User - AUTH

// router.use("/logout", checkAuthenticated, getLogout);

// // GET - Login Success - AUTH

// router.route("/success").get(checkAuthenticated, getLoginSuccess);
// router.route("/fail").get(checkAuthenticated, getLoginFail);

module.exports = router;
