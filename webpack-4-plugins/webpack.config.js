const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/index.js'
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
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Plugins example'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}