var webpack = require("webpack");
var path = require("path");

var config = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist",
    },
    devtool: "sourceMap",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};

module.exports = config;
