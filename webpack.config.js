const HtmtWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') 
const path = require('path')
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./build")    
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      }
    ]
  },
  plugins: [
    new HtmtWebpackPlugin({
      title: "webpack-demo"
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    hot: true,
  }
}