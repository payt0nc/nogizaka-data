const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    publicPath: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  target: "node"
};
