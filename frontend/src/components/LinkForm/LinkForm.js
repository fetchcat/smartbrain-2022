const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="center column ">
      <p className="">
        {
          "This magic brain will detect faces in your pictures. Give it a try..."
        }
      </p>
      <div className="center">
        <div className="center form">
          <input
            type="text"
            className="image-link-input "
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
            placeholder="Copy URL here...."
          />
          <button className="btn cta" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
