/*var mysql = require('mysql');
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

  
  
}*/



var pg = require('pg');

exports.connect = function(sql, callback){
  pg.defaults.ssl = true;
  pg.connect("postgres://vzubcackkvhybf:pCfpFBk5dEwsAM4xzHTKkiTWpK@ec2-54-83-56-31.compute-1.amazonaws.com:5432/d5sif1e96v4fn2", function(err, client) {
    if (err) {
      callback(err, '');
    }
    console.log('Connected to postgres! Getting schemas...');
    var data = '';
    client
      .query ('SELECT * FROM test;',function(err, data) {
        if(err)
          callback(err, '');
      })
      .on ('row', function(row) {
        data += JSON.stringify(row) + "<br>";
      })
      .on ('end',function() {
        callback('', data);
      });
  });

};


/// alternate way
/*.query ('SELECT * FROM test;',function(err, data) {
  if(err)
    callback(err, '');
  else 
    callback('', JSON.stringify(data.rows));
});*/