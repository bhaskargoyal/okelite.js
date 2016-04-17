## postgreSQL-Node.js
A postgreSQL-Node.js based repo.<br>
It describes the code required for making a connection between postgreSQL and Node.js<br>
Follow these steps to get your code running <br>
<ul>
 <li>Write in command line</li>
  <pre>$ npm install pg </pre>
 <li>Install 'pgAdmin', and test with with sample data, to make sure that its up and running smoothly.</li>
 <li>Make a database name 'login', and import file login.sql to it or if you want populate with your own data. I made a heroku account and used heroku provided postgre database.</li>
 <li>Inside your app.js file (db.js in case of mine) write</li>
 <pre>
  var pg = require('pg');
  pg.defaults.ssl = true;
  pg.connect("{{your own ssl link}}", callback);</pre>
  <li>Your db should be successfully connected. The defination of callback function is as follows.</li>
  <pre>
  function callback(err, client) {
    if (err) {
      callback(err, '');
      process.exit(1);
    }
    console.log('Connected to postgres! Getting schemas...');
    var data = '';
    client.query ('{{sql}}',function(err, data) {
      if(err)
        callback(err, '');
    }).on ('row', function(row) {
      data += JSON.stringify(row) + "<br>";
    }).on ('end',function() {
      callback('', data);
    });
  }</pre>
 <li></li>
 <li>To execute a query, write (where {{sql}} would be your query) </li>
 <li>Your code should be up and running.</li>
</ul>
<br>
To deploy you code, just change the sssl link to values provided by your database administrator.
<br>
I would gladly accept contribution, for this repo.
