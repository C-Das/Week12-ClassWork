var mysql = require('mysql');

var connection = mysql.createConnection ({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'world' 
});

connection.connect();

connection.query('SELECT * FROM countries RIGHT JOIN cities ON countries.id=cities.country_id WHERE countries.id=1;',
  function(err, rows,fields) {
    if(err) throw err;

    for (var i=0; i <rows.length; i++) {
       console.log('The city is: ' + rows[i].city + " with " + rows[i].hipsters + " hipsters");
    }
  });

connection.end();