var mysql = require('mysql');
var config = require('./config').config;
exports.connect = function (sql,callback){
 
  var connection = mysql.createConnection(config);
  connection.connect();
  
  var data;
  connection.query(sql, function(err, rows, fields) {
    rows = JSON.stringify(rows);
    if (!err){
      callback('', rows);
    } else {
      callback(err, '');
    }
  });

  
  
}
