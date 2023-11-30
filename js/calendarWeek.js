// load everything from database
const initSqlJs = require('sql.js');
var mysql = require('mysql');

const db = new SQL.Database("Calendar");

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  let sqlstr = "SELECT * FROM Calendar";
  const stmt = db.prepare("SELECT * FROM hello WHERE id=:ID AND Name=:name");
 const result = stmt.getAsObject({':aval' : 1, ':bval' : 'world'});
console.log(result); // Will print {a:1, b:'world'}
  });
});
