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
var port = Number(process.env.PORT) || 3000;
http.createServer(function(request, response){
	
	connectToDb('SELECT * from users', function(err, data) {
		if(!err){
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(`
				<html>
					<head>
						<title>First app</title>
					</head>
					<body>
						<br>
						<center><h1>Here is some data!</h1></center>
						<center><h3>The site is hosted on Heroku</h3></center>
						<center><h3>It uses PostgreSQL and database on aws servers.</h3></center>
						<center><b>${data}</b></center>

					</body>
				</html>
				`);
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(`
				<html>
				can't load data<br>
				${err}
				</html>
			`);
			response.end();
		}
	});
	
	
	
}).listen(port);





console.log("Server is running at http://127.0.0.1:3000");