const path = require("path");
const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const config = require("./dev.config");

// https://webpack.js.org/configuration/dev-server
const options = {
  host: "localhost",
  open: true, // 默认打开浏览器
  port: 3000,
  writeToDisk: false,
  compress: true,
  overlay: {
    // warnings: true,
    errors: true,
  },
  historyApiFallback: true,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(options.port, options.host, () => {
  console.log(`dev server listening on port ${options.port}`);
});
