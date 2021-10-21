 const path = require("path");
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: "development",
   entry:"./src/index.js",
   output: {
     path: path.resolve(__dirname, "dist"),
    //   filename: "main.js",
      filename: "main.[contentHash].js", // in order to use content hash naming pattern
   },
   plugins:[
       new HtmlWebpackPlugin({
           template:"./src/template.html"
       })
   ],
   module: {
     rules: [
       {
         test: /\.scss$/,
         use: [
           "style-loader",// 3. // Inject styles into DOM
           "css-loader", //2. Turns css into commonjs
           "sass-loader" //1. Turns sass into css
         ]
       }
     ]
   }
 }
