const path =require("path");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const common=require("./webpack.config");
const merge=require("webpack-merge");
module.exports=merge(common,{
    mode:"production",
    entry:path.resolve(__dirname,"src","app","app.js"),
    plugins:[
        new CleanWebpackPlugin({})
    ],
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"build")
    }
})