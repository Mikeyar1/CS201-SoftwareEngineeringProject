var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

con.connect(function(err, id) {
  if(err) throw err;

  mysql.input('id1', mysql.VarChar, id);

  con.query( "DELETE FROM ___ WHERE id = @id1", function (err, result, feilds) {
    if (err) throw err;
    console.log(result);
  });
});
