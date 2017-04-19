const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/root.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader',
                    // options: {
                    //     includePaths: ['./node_modules']
                    // }
                }]
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },

    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        stats: "errors-only",
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project',
            template: './src/root.ejs',
        }),
        new ExtractTextPlugin("app.css"),
    ]
}
