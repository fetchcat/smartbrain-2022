const passport = require("passport");
const pool = require("./db");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log(jwt_payload);
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      jwt_payload.email,
    ]);
    if (!user) {
      return done(user.rows[0], false);
    }

    if (user.rows.length > 0) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);
