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
};
