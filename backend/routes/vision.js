const express = require("express");
const router = express.Router();

const { postFaceDetect } = require("../controllers/vision");

// Get Face Data

router.route("/vision").post(postFaceDetect);

module.exports = router;
