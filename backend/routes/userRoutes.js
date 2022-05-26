const express = require("express");
const router = express.Router();

const { getUsers, postNewUser } = require("../controllers/userController");

router.route("/").get(getUsers);

router.route("/new").post(postNewUser);

module.exports = router;
