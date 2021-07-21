process.env.NODE_ENV = "production";

const shared = require("./shared");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "../../src/io-directive.ts"),

  module: {
    rules: shared.rules,
  },
  resolve: shared.resolve,
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "vue-io-directive.js",
    path: path.resolve(__dirname, "../../dist"),
    library: "VueIoDirective",
    libraryTarget: "umd",
    globalObject: "this",
  },
};
