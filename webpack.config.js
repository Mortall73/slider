const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, './src/scripts'),
        filename: 'all.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}