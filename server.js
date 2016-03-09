var http = require('http');
var assert = require('assert');
var db = require('./db');
var connectToDb = db.connect;

/*var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url,function(err, db) {
	assert.equal(null, err);
	console.log('Connected correctly to server.');
	db.close();
});
*/

http.createServer(function(request, response){
	
	connectToDb('SELECT * from users', function(err, data) {
		if(!err){
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write("this is my first node js http server");
			response.end(" \nhello\n" +data);
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(`
				<html>
				can't load data
				${err}
				</html>
			`);
			response.end();
		}
	});
	
	
	
}).listen(3000);





console.log("Server is running at http://127.0.0.1:3000");