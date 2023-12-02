

// adds an event to the database
function addEvent(name, description, weekday, startTime, endTime) {
  
 function addEvent(name, description, weekday, startTime, endTime) {
    // SQL string with placeholders for values
    let sqlstr = "INSERT INTO Calendar(name, desc, weekday, startTime, endTime) VALUES ('name', 'description', 'weekday', 'startTime', 'endTime')";
    
    let stmt = db.prepare(sqlstr);

    stmt.bind([name, description, weekday, startTime, endTime]);

    stmt.run();
 }
 
