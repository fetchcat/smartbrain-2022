const passport = require("passport");

const checkPassport = (req, res, next) => {
  passport.authenticate("jwt", { session: false });
  next();
};

module.exports = checkPassport;
