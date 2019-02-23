var http = require('http');

var server = http.createServer(function (requset, response) {
 	//response.send({result:'OK'});
	response.write("Hello world");
  	response.end();
}).listen(3000, function(){
 console.log("server start at port 3000");
});
