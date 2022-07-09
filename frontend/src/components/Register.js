import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (!firstName) {
      setError("First Name missing");
      return;
    }
    if (!lastName) {
      setError("Last Name missing");
      return;
    }
    if (!email) {
      setError("Email missing");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid Email");
      return;
    }
    if (!password) {
      setError("Password Required");
      return;
    }
    if (password !== password2) {
      setError("Passwords must match");
      return;
    }
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        }),
      });
      console.log(response);
      setSuccess("User registered successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="modal fade"
      id="register"
      tabIndex="-1"
      aria-labelledby="register"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="register">
              Register for SmartBrain 2022
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
                <label htmlFor="registerFirstName" className="form-label">
                  First name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="registerFirstName"
                  placeholder="John"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerLastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="registerLastName"
                  placeholder="Smith"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="registerEmail"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="registerPassword"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="registerPassword2" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="registerPassword2"
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
            </form>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              onClick={registerSubmit}
              className="btn btn-primary"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
