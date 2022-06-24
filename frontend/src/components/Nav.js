import Register from "./Register";
import SignIn from "./SignIn";

const Navigation = () => {
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
              <a
                href="/"
                className="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#signin"
              >
                Sign In
              </a>
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
