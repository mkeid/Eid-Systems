const webpack = require("webpack")
const path = require("path")
const isProduction = JSON.parse(process.env.PROD_ENV || "0")

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "src") + "/client/client.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/",
        filename: "[name].js"
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
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}
