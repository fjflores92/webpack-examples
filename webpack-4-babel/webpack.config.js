const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    devServer: {
      hot: true,
      open: true,
      port: 9000,
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Babel example'
        })
    ]
}