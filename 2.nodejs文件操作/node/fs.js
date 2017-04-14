const fs = require('fs'); //导入fs模块

//readFile(文件名,回调函数)
fs.readFile('file.txt',function(err,data){
	if(err){
		console.log('读取失败');
	}else{
		console.log(data.toString());
	}
});

//运行该js文件会出来二进制数据<Buffer d5 e2 ca c7 d2 bb b8 f6 74 78 74 ce c4 bc fe>，所以需要data.toString()才能真正显示文件内容