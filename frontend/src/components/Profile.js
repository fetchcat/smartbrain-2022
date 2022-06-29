import React, { useContext, useEffect } from "react";
import UserContext from "../context/User";

import FaceRecognition from "./Face";

const Profile = ({ box }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    user.isAuth && (
      <section className="d-flex bg-secondary pt-3 h-100 justify-content-center">
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
    )
  );
};

export default Profile;
