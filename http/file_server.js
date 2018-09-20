'use strict';

var fs = require('fs'),
  url = require('url'),
  path = require('path'),
  http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
// var root = path.resolve(process.argv[2] || '.');
var root = path.resolve('http', 'static');
console.log('Static root dir:' + root);//Static root dir:E:\front end\exercise\Node\http\static

//创建服务器：
var server = http.createServer(function(request, response){
  // 获得URL的path:
  var pathname = url.parse(request.url).pathname;
  // 获得对应的本地文件路径:
  var filepath = path.join(root, pathname);
  console.log(pathname);// /index.html
  console.log(filepath);//E:\front end\exercise\Node\http\static\index.html
  // 获取文件状态:
  fs.stat(filepath, function(err, stats){
    if(!err && stats.isFile()){
      // 没有出错并且文件存在:
      console.log('200 ' + request.url);
      // 发送200响应:
      response.writeHead(200);
      // 将文件流导向response:
      fs.createReadStream(filepath).pipe(response);
    }else{
      // 出错了或者文件不存在:
      console.log('404 ' + request.url);
      // 发送404响应:
      response.writeHead(404);
      response.end('404 Not Found');
    }
  })
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
//网址输入localhost:8080/index.html

