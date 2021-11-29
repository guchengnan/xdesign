const path = require('path');
function resolve(dir){
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        open: true
    },
    chainWebpack: config =>{
        config.resolve.alias
        .set("@src", resolve("src"))
        .set("@utils", resolve("src/utils"))
        .set("@packages", resolve("packages"))
    }
}