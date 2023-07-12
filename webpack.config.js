//uses commonJS syntax

const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		// the name you wanna give to your bundle, by default, main.js
		filename: "bundle.js",
	},
	//all loaders come here
	module: {
		rules: [
			{
				//every file (loader) that ends with css will be added
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
