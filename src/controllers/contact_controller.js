const emailjs = require("emailjs")

module.exports = {
    // Send self an email initiated from the contact page
    sendEmail: function(request, response) {
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

        server.send(message, function(error, result) {
            console.log(error || result);
            response.json({
                name: request.body.name,
                email: request.body.email,
                message: request.body.message
            })
        })
    }
}