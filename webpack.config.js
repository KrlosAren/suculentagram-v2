const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TersetJsPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    App: path.resolve(__dirname, '.src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  optimization: {
    minizer: [
      new TersetJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: [
          'html-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
            'css-loader',
          ],
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
        test: /\.(png|jpe?g|gif|svg|mp4|webm)$/i,
        loader: 'file-loader',
        options: {
          name: '[path].[name].[hash].[ext]',
          outputPath: './src/assets'
        },
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '.src/styles/[name].[hash].css',
      chunkFilename: './src/styles/[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './html/index.html')
    })
  ]
}