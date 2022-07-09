import React, { useContext } from "react";

import Register from "./Register";
import SignIn from "./SignIn";

import UserContext from "../context/User";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    const response = await fetch("/api/users/logout", {
      method: "GET",
    });
  };

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Register />
      <SignIn />
      <div className="container">
        <a href="/" className="navbar-brand">
          SmartBrain 2022
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

export default Navigation;
