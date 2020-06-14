const path =require("path");
const common=require("./webpack.config");
const merge=require("webpack-merge");
module.exports=merge(common,{
    mode:"development",
    output:{
        filename:"[name].js"
    },
    module:{
        rules:[
            {
            test:/\.css$/,
            use:["style-loader","css-loader"]
            }
        ]
    }
})