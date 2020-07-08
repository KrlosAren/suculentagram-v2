const path = require("path");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    open: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          
        "css-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Suculentagram',
    }),
    new MiniCSSExtractPlugin({
      filename: './src/styles/[name].css'
    })
  ]
};
