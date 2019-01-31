const path = require('path');
module.exports = {
  entry:  __dirname + "/index.js",//已多次提及的唯一入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
    filename: "[name].[chunkhash].js"//打包后输出文件的文件名
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}