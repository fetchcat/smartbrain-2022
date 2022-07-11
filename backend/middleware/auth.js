const passport = require("passport");

const checkPassport = (req, res, next) => {
  passport.authenticate("jwt", { session: false });
  next();
};

export default checkPassport;
