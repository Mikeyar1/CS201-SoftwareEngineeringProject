var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

con.connect(function() {
  if(err) throw err;

  con.query( "", function (err, result, feilds) {
    if (err) throw err;
    console.log(result);
  });
});
