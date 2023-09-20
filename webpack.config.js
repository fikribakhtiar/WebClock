const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //Entry
    entry: './src/index.js',

    //Output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //Mode
    mode: 'production',

    //Module
    module: {
        rules: [
            //CSS Style and CSS Loader
            {
                test:/\.css$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            //Babel Loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },

    //Plugin
    plugins: [
        //HtmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
        }),
    ],
};