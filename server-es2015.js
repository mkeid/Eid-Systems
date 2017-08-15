const express = require("express")
const path = require("path")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const config = require("./webpack.config.js")

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
    app.use(webpackDevMiddleware(compiler, {
        path: config.output.path
    }))

    app.use(webpackHotMiddleware(compiler))

    app.get("*", (request, response) => response.sendFile(indexFile))
} else {
    // Serve static assets
    app.use(express.static(distDir))

    // Always return the main index.html since react-router handles routing
    app.get("*", (request, response) => response.sendFile(indexFile))
}

// Start the server
app.set("port", process.env.PORT || defaultPort)
app.listen(app.get("port"), () => {
    console.log(`Started server on port ${defaultPort}..`)
})
