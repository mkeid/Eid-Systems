const passport = require("passport")
const ExtractJwt = require("passport-jwt").ExtractJwt
const JwtStrategy = require("passport-jwt").Strategy
const LocalStrategy = require("passport-local").Strategy

const AuthModel = require("../models/auth_model")
const UserModel = require("../models/user_model")
const { secret } = require("../../config")

// Create JWT strategy (used for verifying an auth token)
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: secret
}

const jwtLogin = new JwtStrategy(jwtOpts, (payload, done) => {
    // See if a user with the given ID exists
    UserModel.findOne(payload.sub, (error, user) => {
        if (error) { return done(error, false) }

        if (user) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
})

// Create local strategy (used for signing in)
const localLogin = new LocalStrategy((username, password, done) => {
    // Verify username and password
    UserModel.findOne({ "username": username }, (findError, user) => {
        if (findError || !user) { return done(null, false) }

        AuthModel.comparePassword(password, user.password, (error, isMatch) => {
            if (error) { return done(error) }
            if (!isMatch) { return done(null, false) }
            return done(null, user)
        })
    })
})

// Let passport use our strategies
passport.use(jwtLogin)
passport.use(localLogin)
