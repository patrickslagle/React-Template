const webpack = require('webpack');
const path = require ('path');

const browserConfig = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development'
}

const serverConfig = {
    entry: './server/server.js',
    target: "node",
    output: {
        path: __dirname,
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    mode: 'development'
}

module.exports = [browserConfig, serverConfig]

