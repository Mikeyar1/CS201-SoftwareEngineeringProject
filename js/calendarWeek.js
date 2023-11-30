// load everything from database
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  con.query("", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
