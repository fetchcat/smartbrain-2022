const vision = require("@google-cloud/vision");

// Face Recognition data from image.

const postFaceDetect = async (req, res) => {
  const { url } = req.body;
  const client = new vision.ImageAnnotatorClient();
  const results = await client.faceDetection(url);
  const faces = results[0].faceAnnotations;
  const numFaces = faces.length;
  console.log(`Found ${numFaces} face${numFaces === 1 ? "" : "s"}.`);
  res.status(200).json(results);
};

module.exports = { postFaceDetect };
