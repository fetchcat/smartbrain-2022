import React from "react";

const Detect = () => {
  return (
    <section className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Ready to detect face...</h3>
          <div className="input-group news-input">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL..."
              aria-label="Image URL"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn bg-dark btn-lg text-light" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detect;
