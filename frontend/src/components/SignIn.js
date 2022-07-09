import React, { useState, useContext, useEffect } from "react";
import UserContext from "../context/User";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState("");

  const { user, setUser } = useContext(UserContext);

  const submitSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, password: userPass }),
      });
      const serverData = await response.json();
      if (serverData.error) {
        console.log(serverData.message);
        setError(serverData.message);
        return;
      }
      // If successful
      setUser({
        firstName: serverData.user.firstname,
        lastName: serverData.user.lastname,
        email: serverData.user.email,
        entries: serverData.user.entries,
        isAuth: true,
      });
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const clearState = () => {
    setUserEmail("");
    setUserPass("");
    setError("");
  };

  return (
    <div
      className="modal fade"
      id="signin"
      tabIndex="-1"
      aria-labelledby="signin"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signin">
              Sign In to SmartBrain 2022
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="signInEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="signInEmail"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="signInPassword"
                  onChange={(e) => setUserPass(e.target.value)}
                />
              </div>
            </form>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={clearState}
            >
              Close
            </button>
            <button
              type="submit"
              onClick={submitSignIn}
              data-bs-dismiss="modal"
              className="btn btn-primary"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
