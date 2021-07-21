const path = require("path");

class Util {
  /**
   * 返回项目根目录
   */
  getRootPath() {
    return path.resolve(__dirname, "../../");
  }

  /**
   * 返回打包入口文件路径
   */
  getEntryMain() {
    return path.resolve(this.getRootPath(), "src/index.ts");
  }

  getOutputPath() {
    return path.resolve(this.getRootPath(), "dist");
  }

  /**
   * 返回[HtmlWebpackPlugin]插件的[template]配置路径
   */
  getHtmlTemplatePath() {
    return path.resolve(this.getRootPath(), "index.html");
  }
}
const util = new Util();
module.exports = util;
