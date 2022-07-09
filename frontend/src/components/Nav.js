import React, { useContext } from "react";

import Register from "./Register";
import SignIn from "./SignIn";

import UserContext from "../context/User";

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    console.log("logged out!");
  };

  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark ">
      <Register />
      <SignIn />
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className="bi bi-person-bounding-box me-2"></i>SmartBrain 2022
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {user.isAuth ? (
                <a className="nav-link" onClick={() => logout()}>
                  Logout
                </a>
              ) : (
                <a
                  href="/"
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#signin"
                >
                  Login
                </a>
              )}
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#register"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
