const FaceRecognition = ({ imageUrl, box }) => {
  let face;

  let boundingBox = {
    top: box.topRow,
    right: box.rightCol,
    bottom: box.bottomRow,
    left: box.leftCol,
  };

  if (imageUrl) {
    face = (
      <div className="center">
        <img
          id="inputImage"
          src={imageUrl}
          className="api-image m1"
          alt="face"
        />
        <div className="bounding-box" style={boundingBox}></div>
      </div>
    );
  } else {
    face = <div>Ready to detect face...</div>;
  }
  return <>{face}</>;
};

export default FaceRecognition;
