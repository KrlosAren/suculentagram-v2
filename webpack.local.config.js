const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    app : path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './src/js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use : [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 819200,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './src/styles/css/[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: '[name].html',
      template: path.resolve(__dirname, './html/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*', '**/commons.*'],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons',
    }
  }
}