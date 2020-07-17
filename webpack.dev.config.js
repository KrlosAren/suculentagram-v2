const path = require('path')
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    port: 4000,
    hot: true,
    open:true,
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
<<<<<<< HEAD
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
=======
        test: /\.js$/,
        use:'babel-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.html$/i,
      //   use: [
      //     'file-loader?name=[name].[ext]',
      //     'extract-loader',
      //     'html-loader'
      //     ],
      // },
      // {
      //   test: /\.pug$/,
      //   use : [
      //     {
      //       loader: 'pug-loader',
      //       options: {
      //         pretty: true,
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   use : [
      //     'style-loader',
      //     'css-loader',
      //   ]
      // },
>>>>>>> master
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
<<<<<<< HEAD
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
    new MiniCssExtractPlugin({
      filename: '.src/styles/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ]
=======
        loader: 'file-loader',
        options: {
          outputPath: './src/assets/',
          name: '[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: './src/styles/css/[name].css',
    // }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: '[name].html',
      template: path.resolve(__dirname, 'index.html'),
      // filename: '[name].html'
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