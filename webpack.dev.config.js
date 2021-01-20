const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    filename: 'src/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 4000,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        loader: 'file-loader',
        options: {
          outputPath: './src/assets/',
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '.src/styles/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './html/index.html'),
    }),
  ],
};
