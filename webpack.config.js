const path =require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:{
        main:path.resolve(__dirname,"src","app","app.js"),
    vendor:path.resolve(__dirname,"src","vendor","vendor.js")},
      plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"index.html")
        })
    ]
}