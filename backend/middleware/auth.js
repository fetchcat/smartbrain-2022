// Check authenticated

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized Request" });
}

// Redirect if already authenticated

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  }
  next();
}

// Log out user (Passport)

const getLogout = async (req, res) => {
  req.logout();
  res.clearCookie("connect.sid");
  res.status(200).json({ isAuth: false, message: "logout successful" });
};

module.exports = { checkAuthenticated, checkNotAuthenticated, getLogout };
