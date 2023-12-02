

// adds an event to the database
function addEvent(name, description, weekday, startTime, endTime) {
  
    let sqlstr = "INSERT INTO Calendar(name, desc, weekday, startTime, endTime) VALUES ('name', 'description', 'weekday', 'startTime', 'endTime')";
    db.run(sqlstr);   
}
