
var webpack = require("webpack");

var config = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.js",
        publicPath: "/dist"
    },
    // devtool: "cheap-module-eval-source-map", // faster
    devtool: "sourceMap",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};


module.exports = config;
