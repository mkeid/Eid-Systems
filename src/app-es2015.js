const bodyParser = require("body-parser")
const config = require("../webpack.config.js")
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const router = require("./routes.js")

// Initialize needed variables
const app = express()
const defaultPort = 3000
const distDir = path.resolve(__dirname, "../dist")
const indexFile = path.resolve(__dirname, "../public", "index.html")
const isDevelopment = app.get('env') !== "production"
const compiler = webpack(config)

// Initiate db connection
mongoose.connect("mongodb://localhost/eid-systems")

// Open /public to both the development and production servers
app.use(express.static(path.resolve(__dirname, "../public")))

if (isDevelopment) {
    // Use webpack middleware layers
    app.use(webpackDevMiddleware(compiler, {path: config.output.path}))
    app.use(webpackHotMiddleware(compiler))
} else {
    // Serve built production assets
    app.use(express.static(distDir))
}

// Add routing for api with json support
app.use(bodyParser.json())
app.use("/api", router)

// Always return the main index.html since react-router handles routing
app.get("*", (request, response) => response.sendFile(indexFile))

// Start the server
app.set("port", process.env.PORT || defaultPort)
app.listen(app.get("port"), () => {
    console.log(`Started server on port ${defaultPort}..`)
})
