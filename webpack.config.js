const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'trainings.html',
            template: './src/trainings.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'training.html',
            template: './src/training.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
};