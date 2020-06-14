const path =require("path");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const MiniCssExtractPlugin =require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin =require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin=require("terser-webpack-plugin")
const common=require("./webpack.config");
const merge=require("webpack-merge");
module.exports=merge(common,{
    mode:"production",
    plugins:[
        new CleanWebpackPlugin({}),
        new MiniCssExtractPlugin({filename:"[name].[ContentHash].css"})
    ],
    optimization:{
        minimizer:[new OptimizeCssAssetsWebpackPlugin(),new TerserWebpackPlugin()]
    },
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
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
                }
        ]
    },
    output:{
        filename:"[name].[ContentHash].js",
        path:path.resolve(__dirname,"build")
    }
})