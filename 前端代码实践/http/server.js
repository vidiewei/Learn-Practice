var http=require('http');
var fs=require('fs');
var url=require('url');

var host = '127.0.0.1';
var port=8080;

// 创建服务器
http.createServer(function(request,response){
    // 解析请求，包括文件名
    var pathName=url.parse(request.url).pathname;
    // 输出请求的文件名
    console.log("request for "+pathName+" received!");
    // 从文件系统读取请求的内容
    fs.readFile(pathName.substr(1),function(err,data){
        if(err){
            console.log(err);
            response.writeHead(404,{'Content-Type': 'text/html'});
        }
        else{
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        // 发送响应数据
        response.end();
    })
}).listen(port,host);

console.log('Server running at http://127.0.0.1:8080/');