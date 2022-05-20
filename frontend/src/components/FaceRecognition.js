const FaceRecognition = ({ imageUrl }) => {
  let face;

  if (imageUrl) {
    face = (
      <div className="center">
        <img src={imageUrl} className="api-image m1" />
      </div>
    );
  } else {
    face = <div>Ready to detect face...</div>;
  }
  return <>{face}</>;
};

export default FaceRecognition;
