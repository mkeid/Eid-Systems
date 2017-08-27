const webpack = require("webpack")
const path = require("path")
const isProduction = JSON.parse(process.env.PROD_ENV || "0")

module.exports = {
    entry: path.resolve(__dirname, "src") + "/client/client.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader?name=/fonts/[name].[ext]"
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader?name=/images/[name].[ext]"
            },

        ]
    },
    plugins: isProduction ? [
        new webpack.EnvironmentPlugin(["NODE_ENV"])
    ] : []
}
