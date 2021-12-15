const HtmtWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack') 
const path = require('path')
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./build")    
  },
// First, you can package the file once, and then check the error location in the developer
// tool of the browser, you can find that there is no column mapping, and the error points 
// to console.log(hello)

// Then, you can try to remove the comments below, package again and find that the column 
// mapping can be generated normally, and the error points to hello
  module: {
    rules: [
      // {
      //   test: /\.m?js$/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // }
    ]
  },
  plugins: [
    new HtmtWebpackPlugin({
      title: "webpack-demo"
    }),
    new CleanWebpackPlugin(),
    // new webpack.SourceMapDevToolPlugin({
    //   columns: true
    // }),
  ]
}