const path =require("path");
module.exports={
    entry:path.resolve(__dirname,"src","app","app.js"),
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"build")
    }
}