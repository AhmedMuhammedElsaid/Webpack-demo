const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin=require("clean-webpack-plugin")
const MiniCssExtraPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin=require("optimize-css-assets-webpack-plugin")
const TerserPlugin=require("terser-webpack-plugin")

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contentHash].js",
  },
  optimization:{
    minimizer:[new OptimizeCssAssetsPlugin(),new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify:{
          removeAttributeQuotes:true,
          collapseWhitespace:true,
          removeComments:true,
        }
      }),]
  },
  plugins:[
    new MiniCssExtraPlugin({filename:'[name].[contentHash].css'}),
    new CleanWebpackPlugin(),
  ],
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
        //   "style-loader", // 3. // Inject styles into DOM
        MiniCssExtraPlugin.loader,
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      }
    ]
  }
});
