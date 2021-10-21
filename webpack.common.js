const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    //   filename: "main.js",
    filename: "main.[contentHash].js", // in order to use content hash naming pattern
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
          use:{
            loader:'file-loader',
            options:{
              name:"[name].[hash].[ext]",
              outputPath:"imgs"
            }
          }
        },
      
    ],
  },
};
