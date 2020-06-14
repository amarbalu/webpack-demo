const path =require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin")
module.exports={
    entry:path.resolve(__dirname,"src","app","app.js"),
    output:{
        filename:"main.[contentHash].js",
        path:path.resolve(__dirname,"build")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"index.html")
        })
    ],
    module:{
        rules:[
            {
            test:/\.css$/,
            use:["style-loader","css-loader"]
            }
        ]
    }
}