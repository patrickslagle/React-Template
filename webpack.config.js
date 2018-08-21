const webpack = require('webpack');
const path = require ('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'webpack-bundle.js',
        //we need the below for dev server. Otherwise it just looks in the root folder. 
        publicPath: "build"
    },
    module: {
        rules: [
            {
                test: /jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: "development"
}
