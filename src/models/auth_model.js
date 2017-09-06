const bcrypt = require("bcrypt-nodejs")
const jwt = require("jwt-simple")
const config = require("../../config")

class AuthModel {
    static comparePassword(candidate, password, callback) {
        bcrypt.compare(candidate, password, (error, isMatch) => {
            if (error) { return callback(error) }
            callback(null, isMatch)
        })
    }

    static generateToken(user) {
        const timestamp = new Date().getTime()
        return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
    }
}

module.exports = AuthModel
