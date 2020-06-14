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
    module:{
        rules:[
            {
                test:/\.html$/,
                use:["html-loader"]
            },{
                test:/\.(svg|jgp|png)$/,
                use:{
                    loader:"file-loader",
                options:{
                    name:"[name].[hash].[ext]",
                    outputPath:"assets"
                }
            }
            }
        ]
    },
    output:{
        filename:"main.[ContentHash].js",
        path:path.resolve(__dirname,"build")
    }
})