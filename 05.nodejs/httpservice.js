// 导包
const http = require('http');
// 创建服务
http.createServer(function (request, response) {
    // 告诉浏览器，以text-plain 的方式解析 hello service
    response.writeHead(200, {'Content-type': 'text-plain'})
    //给浏览器输出内容
    response.end("hello service");
    // 监听端口
}).listen(8888);
console.log('启动的服务地址是  http://localhost:8888,启动成功');




