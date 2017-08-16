const bodyParser = require("body-parser")
const config = require("./webpack.config.js")
const emailjs = require("emailjs")
const express = require("express")
const path = require("path")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const data = require("./src/data")

// Initialize needed variables
const app = express()
const defaultPort = 3000
const distDir = path.resolve(__dirname, "dist")
const indexFile = path.resolve(__dirname, "public", "index.html")
const isDevelopment = app.get('env') !== "production"
const compiler = webpack(config)

// Open /public to both the development and production servers
app.use(express.static(path.resolve(__dirname, "public")))

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
app.get("/store", (request, response) => response.json(data))

// Send self an email initiated from the contact page
app.post("/email", function(request, response) {
    const server = emailjs.server.connect({
        host: "localhost"
    })

    const message = {
        text: request.body.message,
        from: "server@eid.systems",
        to: "mohamedkeid@gmail.com",
        subject: "Eid Systems Contact"
    }

    server.send(message, function(error, result) {
        console.log(error || message);
    })
})

// Always return the main index.html since react-router handles routing
app.get("*", (request, response) => response.sendFile(indexFile))

// Start the server
app.set("port", process.env.PORT || defaultPort)
app.listen(app.get("port"), () => {
    console.log(`Started server on port ${defaultPort}..`)
})
