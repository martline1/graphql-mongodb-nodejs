const path          = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports =(env, arg) => {
	return {
		entry   : {
			server : "./src/index.ts",
			seed   : "./src/Config/seed.ts",
		},
		mode    : process.env.NODE_ENV === "production" ? "production" : "development",
		context : process.cwd(),
		target  : "node",
		module  : {
			rules  : [
				{
					test    : /\.tsx?$/,
					use     : "ts-loader",
					exclude : /node_modules/,
				},
			],
		},
		resolve : {
			extensions : [".ts", ".json"],
			alias      : {
				"~" : path.resolve(__dirname, "src/")
			}
		},
		output : {
			filename : "[name].js",
			path    : path.resolve(__dirname),
		},
		externals : [nodeExternals()],
	};
};
