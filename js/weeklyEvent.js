// adds an event to the database
function addEvent(name, description, weekday, startTime, endTime) {

  var mysql = require('mysql');

  con.connect(function(err) {
    if (err) throw err;
    let sqlstr = "INSERT INTO Calendar(name, desc, weekday, startTime, endTime) VALUES ('name', 'description', 'weekday', 'startTime', 'endTime')";
    db.run(sqlstr); // Run the query without returning anything
 const result = stmt.getAsObject({':aval' : 1, ':bval' : 'world'});
console.log(result); // Will print {a:1, b:'world'}
, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
};
