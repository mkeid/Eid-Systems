const bodyParser = require("body-parser")
const config = require("../webpack.config.js")
const emailjs = require("emailjs")
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")

// Initialize needed variables
const app = express()
const defaultPort = 3000
const distDir = path.resolve(__dirname, "../dist")
const indexFile = path.resolve(__dirname, "../public", "index.html")
const isDevelopment = app.get('env') !== "production"
const compiler = webpack(config)
const { getComponents, getPosts, getProjects, getSkills } = require("./models")

// Initiate db connection
mongoose.connect("mongodb://localhost/eid-systems")
const db = mongoose.connection

// Open /public to both the development and production servers
app.use(express.static(path.resolve(__dirname, "../public")))

if (isDevelopment) {
    // Use webpack middleware layers if developing
    app.use(webpackDevMiddleware(compiler, {
        path: config.output.path
    }))
    app.use(webpackHotMiddleware(compiler))
} else {
    // Serve built production assets
    app.use(express.static(distDir))
}

// Add JSON support
app.use(bodyParser.json())

// Send application data store
app.get("/api/store", function(request, response) {
    getComponents(function(error, components) {
        let comps = {}
        for (let i = 0; i < components.length; i++) {
            let comp = components[i]
            comps[comp.name] = Object.assign({}, comp.component)
        }

        getPosts(function(error, posts) {
            getProjects(function(error, projects) {
                getSkills(function(error, skills) {
                    const payload = Object.assign({},
                        comps,
                        {posts},
                        {projects},
                        {skills})
                    response.json(payload)
                })
            })
        })
    })
})

// Send self an email initiated from the contact page
app.post("/api/contact", function(request, response) {
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
})

// Always return the main index.html since react-router handles routing
app.get("*", (request, response) => response.sendFile(indexFile))

// Start the server
app.set("port", process.env.PORT || defaultPort)
app.listen(app.get("port"), () => {
    console.log(`Started server on port ${defaultPort}..`)
})
