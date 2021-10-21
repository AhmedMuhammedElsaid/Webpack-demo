 const path = require("path");

 module.exports = {
   mode: "development",
   entry:"./src/index.js",
   output: {
     path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    //   filename: "main.[contentHash].js", // in order to use content hash naming pattern
   },
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
