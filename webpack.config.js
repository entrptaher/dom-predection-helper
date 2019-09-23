var path = require("path");

var APP_DIR = path.resolve(__dirname, "app");
var BUILD_DIR = path.resolve(__dirname, "build");

var config = {
  entry: {
    index: APP_DIR + "/index.js"
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true
                }
              ]
            ]
          }
        }
      }
    ]
  }
};

module.exports = config;
