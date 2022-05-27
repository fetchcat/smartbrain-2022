const express = require("express");
const router = express.Router();

const {
  getUsers,
  postNewUser,
  postLoginUser,
} = require("../controllers/userController");

router.route("/").get(getUsers);

router.route("/new").post(postNewUser);

router.route("/login").post(postLoginUser);

module.exports = router;
