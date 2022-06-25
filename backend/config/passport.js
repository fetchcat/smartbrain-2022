const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    //Check for existing user
    if (user.rows[0] == null) {
      return done(null, false, { message: "No user found" });
    }
    try {
      // Check Password
      if (await bcrypt.compare(password, user.rows[0].password)) {
        return done(null, user.rows[0]);
      } else {
        return done(null, false, { message: "invalid password" });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => done(null, getUserById(id)));
}

module.exports = initialize;
