var webpack = require("webpack");
var path = require("path");

var APP_DIR = path.resolve(__dirname, "app");
var BUILD_DIR = path.resolve(__dirname, "build");

var config = {
	entry: {
		"dom": APP_DIR + "/index.js",
	},
	output: {
		path: BUILD_DIR,
		filename: "[name].js"
	},
	plugins: [
		new webpack.ProvidePlugin({
			regeneratorRuntime: "regenerator-runtime/runtime"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015", "stage-0", "react"]
					}
				}
			}
		]
	}
};

module.exports = config;
