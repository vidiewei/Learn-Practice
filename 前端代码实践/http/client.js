var http=require('http');

// 用于请求的选项
var options={
    host:'127.0.0.1',
    port:'8080',
    path:'./index.html'
};

// 处理响应的回调函数
var callback=function(response){
    console.log(res.statusCode);
    console.log(res.headers);
    res.setEncoding('utf-8');
    // 不断更新数据
    var body='';
    response.on('data',function(data){
        body+=data;
    });

    response.on('end',function(){
        console.log(body);
    });
}

// 向服务端发送请求
var req=http.request(options,callback);
console.log("客户端向服务端发送请求...");
console.log("请求信息为:"+options.host+options.port+options.path);
req.end();