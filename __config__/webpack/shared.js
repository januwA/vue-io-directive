const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const util = require("./util");

/**
 * 在[dev/prod.config.js]中公用的配置
 */
module.exports = {
  entry: {
    main: util.getEntryMain(),
  },
  output: {
    filename: "[name].js",
    path: util.getOutputPath(),

    // 如果发布第三方包，可以启动下面这三个配置
    // library: "packageName",
    libraryTarget: "umd",
    globalObject: "this",
  },

  rules: [
    {
      // See also: https://github.com/microsoft/TypeScript-Babel-Starter
      // 如果你想要.d.ts文件，那么ts-loader可能来的更直接点
      test: /\.tsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "ts-loader",
        options: {
          configFile: path.join(
            util.getRootPath(),
            process.env.NODE_ENV === "production"
              ? "tsconfig.build.json"
              : "tsconfig.json"
          ),
        },
      },
    },
    {
      test: /\.vue$/,
      use: {
        loader: "vue-loader",
        options: {
          loaders: {},
        },
      },
    },
  ],
  resolve: {
    // 导入此类文件时，不用添加后缀
    extensions: [".tsx", ".ts", ".js", ".vue"],
  },
  optimization: {},
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      title: "vue-io-directive",
      template: util.getHtmlTemplatePath(),
    }),
  ],
};
