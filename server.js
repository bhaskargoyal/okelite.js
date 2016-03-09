var http = require('http');
var fs = require("fs");
var port = Number(process.env.PORT) || 3000;
http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	var data = fs.readFileSync('index.html','UTF-8');
	response.write(data);
	response.end();
}).listen(port);

console.log("Server is running at http://127.0.0.1:8000");