const path =require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
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