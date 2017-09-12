const emailjs = require("emailjs")

module.exports = {
    /** Send self an email initiated from the contact page */
    sendEmail(request, response, next) {
        const server = emailjs.server.connect({
            user: "mohamedkeideidsystems@gmail.com",
            host: "smtp.gmail.com",
            password: "",
            ssl: true
        })

        const message = {
            text: `
                Name: ${request.body.email}
                Email: ${request.body.name}
                Message: ${request.body.message}
            `,
            from: "server@eid.systems",
            to: "mohamedkeid@gmail.com",
            subject: "Eid Systems Contact"
        }

        server.send(message, function(sendError, result) {
            if (sendError) {
                return next(sendError)
            }

            response.json({
                name: request.body.name,
                email: request.body.email,
                message: request.body.message
            })
        })
    }
}
