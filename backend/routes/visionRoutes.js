const express = require("express");
const router = express.Router();

const { postFaceDetect } = require("../controllers/visionController");

// Get Face Data

router.route("/vision").post(postFaceDetect);

module.exports = router;
