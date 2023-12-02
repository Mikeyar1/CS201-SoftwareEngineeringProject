const initSqlJs = require('sql.js');
const fs = require('fs');

const SQL = await initSqlJs({
    // Required to load the wasm binary asynchronously.
    // You can omit locateFile completely when running in node
    locateFile: file => `/node_modules/sql.js/dist/sql-wasm.wasm`
  });



function createNewCalendar() {
    db = new SQL.Database();
    let sqlstr = "CREATE TABLE Calendar (name char, desc char, weekday char, start ) "
}

function importExistingCalendar(filename, db) {
    const fs = require('fs');
    const initSqlJs = require('sql-wasm.js');
    const filebuffer = fs.readFileSync(filename);

    initSqlJs().then(function (SQL) {
        // Load the db
        db = new SQL.Database(filebuffer);
    });
}

function exportCalendar(filename, db) {
    const fs = require("fs");
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(filename, buffer);
}

