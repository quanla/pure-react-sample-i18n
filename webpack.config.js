const path = require("path");

module.exports = {
    cache: true,
    // devtool: "eval",
    entry: ["./src/app-loader.jsx"],
    output: {
        path: `${__dirname}/dist`,
        filename: "app-loader.js"
    },
    performance: {
        hints: false, // enum
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['env', 'stage-0', "react"],
                }

            },
        ],
    },
    resolve: {
        // root: __dirname + "/src/js",
        extensions: ['.js', '.jsx'],
        alias: {
            "react": path.resolve(__dirname, 'build/webpack-alias/webpack-alias-react.js'),
            "react-dom": path.resolve(__dirname, 'build/webpack-alias/webpack-alias-react-dom.js'),
        },
    },
};

