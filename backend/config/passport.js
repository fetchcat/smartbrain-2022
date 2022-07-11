const passport = require("passport");
const pool = require("./db");

const { JwtStrategy, ExtractJwt } = require("passport-jwt");

var options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(options, async function (jwt_payload, done) {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      jwt_payload.email,
    ]);
    if (!user) {
      return done(user, false);
    }

    if (user.rows.length > 0) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);
