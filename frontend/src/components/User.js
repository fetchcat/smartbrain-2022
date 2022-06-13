import React from "react";

import FaceRecognition from "./Face/Face";

const User = ({ box }) => {
  return (
    <section className="bg-secondary pt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pb-3">
            <div className="card border-0 text-center">
              <h4 className="card-header">
                <i className="bi bi-person-circle"></i> User Info
              </h4>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item fw-bold">Hello, Nerd</li>
                  <li className="list-group-item list-group-item-light">
                    Email: nerd@gmail.com
                  </li>
                  <li className="list-group-item ">Detections: 15</li>
                  <li className="list-group-item list-group-item-primary">
                    Current Rank: 5
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-3">
            <div className="card border-0 text-center">
              <h4 className="card-header">
                <i className="bi bi-person-circle"></i> Image
              </h4>
              <div className="card-body">
                <FaceRecognition box={box} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
