const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        test: /\.html$/i,
        use: [
          'html-loader'
        ],
      },
      {
        test: /\.css$/,
        loader: [
            'style-loader',
            'resolve-url-loader',
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
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '.src/styles/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './html/index.html')
    }),
  ]
}