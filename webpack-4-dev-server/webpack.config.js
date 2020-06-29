const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
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
            title: 'Webpack 4 Dev Server Example'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}