const HtmtWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { merge } = require("webpack-merge")
const devConfig = require("./dev.conf")
const prodConfig = require("./prod.conf")
const commonConfig = {
  entry: "./index.js",
  // mode: "development",
  // devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../build")    
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
    // new CleanWebpackPlugin(),
  ],
  // devServer: {
  //   hot: true,
  // }
}

module.exports = function(env) {
  const isProduction = env.production
  const config = isProduction ? prodConfig : devConfig
  return merge(commonConfig, config)  
}