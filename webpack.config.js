const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: "development",
    entry: './app/index.js',

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/"
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './app/template/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {

                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },  
            {
                test: /\.png$/,
                loader: 'url-loader'
              }, {
                test: /\.jpg$/,
                loader: 'file-loader'
              },
            
        ]
    },
    watch: true,
    resolve: {
        modules: [
            path.join(__dirname, '/'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx'],
        alias: {
            css: 'app/media/css'
        }
    }
}