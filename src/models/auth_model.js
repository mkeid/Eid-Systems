const bcrypt = require("bcrypt-nodejs")
const jwt = require("jwt-simple")
const config = require("../../config")


class AuthModel {
    /** Encrypt a password and compare it with the encryped one in the db */
    static comparePassword(candidate, password, callback) {
        bcrypt.compare(candidate, password, (error, isMatch) => {
            if (error) { return callback(error) }
            callback(null, isMatch)
        })
    }

    /** Generate a token based on a given user's id */
    static generateToken(user) {
        const timestamp = new Date().getTime()
        return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
    }
}


module.exports = AuthModel
