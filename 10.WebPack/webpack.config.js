// 导入path模块 nodejs 的内置模块
const path =require("path");
// 定义JS打包规则
module.exports = {
    // 入口函数，从哪里开始打包编译
    entry:"./src/main.js",
    // 编译成功后把内容输出到哪里去
    output:{
        // 定义输出的指定目录，__dirname当前项目根目录的文件夹
        path:path.resolve(__dirname,"./dist"),
        // 合并的js文件会存放在dist目录下的bundle.js文件中
        filename:"bundle.js"
    }
}