const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    App: './src/App.js'
  },
  output: {
    filename: 'src/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    contentBase : path.resolve(__dirname, '192.168.0.4:4000'),
    port: 4000,
    hot: true,
    open:true,
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
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
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          }
        }
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '.src/styles/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    }),
  ]
}