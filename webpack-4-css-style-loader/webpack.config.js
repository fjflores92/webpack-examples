const path = require('path')

module.exports = {
    entry: './src/js/index.js',
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
    }
}