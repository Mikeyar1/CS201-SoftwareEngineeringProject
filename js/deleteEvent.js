const sql = require('sql.js');

//Parameters are the id and the database
function deleteEvent(id1, db) {
    
    db.run("DROP FROM Calendar WHERE id = @id1;");
}
