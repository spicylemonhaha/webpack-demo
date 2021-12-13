const path = require("path")
module.exports = {
  // According to the document, the default value of the context is the current
  // directory, so whether it refers to the absolute path of the root directory
  // of the project or the absolute path of the directory where the webpack.config.js file 
  // is located is wrong, because if the answer is one of the two If so, the value of entry
  // should be ./src/index.js to find the entry.

  // So the actual situation is as stated in my commit, the default value of context is the absolute 
  // path of the directory where the script that starts webpack is located. For this example project,
  // the default value of context is the absolute path of the directory where package.json is currently 
  // located. ../src/index.js can find the entrance

  // You can try to change the value of entry to ./src/index.js. You will find that webpack reports errors.
  entry: "../src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
  }
}