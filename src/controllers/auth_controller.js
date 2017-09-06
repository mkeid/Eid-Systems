const AuthModel = require("../models/auth_model")

module.exports = {
    // Attempt to authenticate a user and provide a session token
    login(request, response, next) {
        // Passport passes the user object from "next" into request
        const user = request.user

        // Generate and return a token generated through this user
        const token = AuthModel.generateToken(user)
        return response.send({ token })
    }
}
