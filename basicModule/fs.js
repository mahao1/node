let fs =  require('fs');

//写文件：writeFile()的参数依次为文件名、数据和回调函数。
var data = 'Hello, Node.js';
fs.writeFile('sample.txt', data, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('ok');
  }
});

//fs.readFile('文件路径/文件名',[编码],回调函数);
fs.readFile('sample.txt','utf-8',function(err, data){
  if(err){//出错了
    console.log(err);
  }else{//正常
    console.log(data);
  }
});

//如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
fs.stat('sample.txt', function(err, stat){
  if(err){
    console.log(err);
  }else{
    // 是否是文件:
    console.log('isFile: ' + stat.isFile());
    if (stat.isFile()) {
      // 文件大小:
      console.log('size: ' + stat.size);
      // 创建时间, Date对象:
      console.log('birth time: ' + stat.birthtime);
      // 修改时间, Date对象:
      console.log('modified time: ' + stat.mtime);
    }
  }
});

// 打开一个流:
let rs = fs.createWriteStream('output1.txt', 'utf-8');
rs.write('使用Stream写入文本数据...\n');
rs.write('end...');
rs.end();

