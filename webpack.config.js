const path = require('path')
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:3500/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devServer:{
    contentBase: path.resolve(__dirname,'dist'),
    open: true,
    port: 3500,
    hot: true,
    // host: '192.168.0.4:3500',
=======
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    app : path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './src/[name].js',
  },
  mode: 'development',
  devServer: {
    port: 3500,
    hot: true,
    open: true,
>>>>>>> master
  },
  module: {
    rules: [
      {
        test: /\.js$/,
<<<<<<< HEAD
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [
=======
        use:'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          'html-loader'
          ],
      },
      {
        test: /\.pug$/,
        use : [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use : [
>>>>>>> master
          'style-loader',
          'css-loader',
        ]
      },
      {
<<<<<<< HEAD
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          }
        }
=======
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
>>>>>>> master
      },
    ]
  },
  plugins: [
<<<<<<< HEAD
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist')
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: '[name].html',
      template: path.resolve(__dirname, './index.html')
    })
  ]
=======
    new MiniCssExtractPlugin({
      filename: './src/styles/css/[name].css',
    }),
    new HtmlWebpackPlugin({
      // alwaysWriteToDisk: true,
      title: '[name].html',
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0,
  //     name: 'commons',
  //   }
  // }
>>>>>>> master
}