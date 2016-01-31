var mysql = require('mysql');

var connection = mysql.createConnection ({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'bears_db' 
});

connection.connect();

var showBears = function(){
  connection.query('SELECT * FROM happy_bears;',
  function(err, rows,fields) {
    if(err) throw err;
    console.log(rows);
  });
}

var addBears = function(){
  var query = "INSERT INTO happy_bears (name,favourite_food,personality) VALUES (?,?,?)";
  var bear = ["Mike Ditta","Steak","Rough"];
  connection.query(query,bear, function(err,results) {
    if(err) {throw err;}
   console.log("Inserted the bear");
  });
}

var deleteBears = function(){
  var query = "DELETE from happy_bears where id=?";
  var idToBeDeleted = process.argv[2];
  connection.query(query,idToBeDeleted,function(err,results){
    if (err) {throw err;}
    console.log("Bear "+idToBeDeleted + "was deleted");
  })
}
// addBears();
showBears();
// deleteBears();


connection.end();