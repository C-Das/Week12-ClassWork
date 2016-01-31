var mysql = require('mysql');

var connection = mysql.createConnection ({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'bears_db' 
});

connection.connect();

connection.query('SELECT * FROM happy_bears;',
  function(err, rows,fields) {
    if(err) throw err;

    console.log(rows);
    
    // for (var i=0; i <rows.length; i++) {
    //    console.log('The Name of the bear is: ' + rows[i].name + " favourite Food is :" + rows[i].favourite_food + " and Personality is :"+rows[i].personality);
    // }
  });

connection.end();