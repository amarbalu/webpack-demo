const path =require("path");
const common=require("./webpack.config");
const merge=require("webpack-merge");
module.exports=merge(common,{
    mode:"development",
    entry:path.resolve(__dirname,"src","app","app.js"),
    output:{
        filename:"main.js"
    }
})