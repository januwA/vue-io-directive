process.env.NODE_ENV = "production";

// 最小化生产
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const shared = require("./shared");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "../../src/io-directive.ts"),

  module: {
    rules: shared.rules,
  },
  resolve: shared.resolve,
  optimization: {
    // 压缩js,css文件
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [/*new CleanWebpackPlugin(),*/ new VueLoaderPlugin()],
  output: {
    filename: "vue-io-directive.js",
    path: path.resolve(__dirname, "../../build"),
    libraryTarget: "umd",
    globalObject: "this",
  },
};
