const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: __dirname + "/app.jsx"
  },//已多次提及的唯一入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
    filename: "[name].[hash].js"//打包后输出文件的文件名
  },
  mode: "development",
  devServer: {
    contentBase: __dirname,
    compress: true,
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热替换需要引入
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // {//生成新的chunkhash index.html
    //   chunksSortMode: 'none',
    //   template: 'index.html',
    //   vendorJsName: require("./dist/json/bundle-config.json").vendor.js,
    //   chunks: ['app']//存在问题，html中引入了login和index的js,
    // }
  
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|woff2|otf|svg|eot|ttf)\??.*$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', "stage-0"]
          }
        }]
      }
    ]
  }
}