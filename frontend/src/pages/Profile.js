import React, { useContext, useEffect } from "react";
import UserContext from "../context/User";

import Nav from "../components/Nav";

// import FaceRecognition from "./Face";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Nav />
      <section className="bg-dark text-light p-5">
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
                <button
                  className="btn bg-primary btn-lg text-light"
                  type="button"
                >
                  Detect!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex bg-secondary py-5 h-100 justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-3">
              <div className="card border-0 text-center">
                <h4 className="card-header">
                  <i className="bi bi-person-circle"></i> User Info
                </h4>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item fw-bold">
                      Hello, {user.firstName}
                    </li>
                    <li className="list-group-item list-group-item-light">
                      Email: {user.email}
                    </li>
                    <li className="list-group-item ">
                      Detections: {user.entries}
                    </li>
                    <li className="list-group-item list-group-item-primary">
                      Current Rank: {user.rank}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-3">
              <div className="card border-0 text-center">
                <h4 className="card-header">
                  <i className="bi bi-card-image"></i> Image
                </h4>
                <div className="card-body">
                  {/* <FaceRecognition box={box} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
