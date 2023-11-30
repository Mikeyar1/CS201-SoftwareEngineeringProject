// adds an event to the database
function addEvent(name, description, weekday, startTime, endTime) {
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("INSERT INTO Calendar(name, desc, weekday, startTime, endTime) VALUES ('name', 'description', 'weekday', 'startTime', 'endTime')", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
