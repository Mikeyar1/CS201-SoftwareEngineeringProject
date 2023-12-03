let db = new SQL.Database();

function createNewCalendar() {
    // Set the database object within the browser equal to a new base table
    let sqlstr = 'CREATE TABLE Calendar (name char, desc char, weekday char, start time)';
    db = new SQL.Database(sqlstr);
}

function importExistingCalendar() {
    // Trigger the file input field
    document.getElementById('fileInput').click();

    // Listen for file selection
    document.getElementById('fileInput').addEventListener('change', handleFileSelect);
}

function handleFileSelect(event) {
    const fileInput = event.target;
    // Check if a file was selected
    if (fileInput.files.length > 0) {
        // Function to turn HTML input into a source for loading a database
        fileInput.onchange = () => {
            const f = fileInput.files[0];
            const r = new FileReader();
            r.onload = function () {
                const Uints = new Uint8Array(r.result);
                db = new SQL.Database(Uints);
            }
            r.readAsArrayBuffer(f);
        }
    }
}

function exportCalendar() {
    const data = db.export();
    const blob = new Blob([data], { type })
    // Create a download link
    const link = document.createElement('a');
    document.body.appendChild(a);
    a.style = "display: none";
    link.href = URL.createObjectURL(blob);
    // Set the filename for the download
    link.download = 'calendar.db';
    // Trigger a click on the link to initiate the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
}


function addEvent(name, desc, start, end, days) {
    db.run(`INSERT INTO Calendar VALUES (${name}, ${desc}, ${start}, ${end}, ${days})`);
}

function removeEvent(name) {
    db.run(`DELETE FROM Calendar WHERE name = ${name}`);
}

function loadDay(day) {
    const dailyEvents = db.run(`SELECT * FROM Calendar WHERE name = ${day}`)
    // code to insert events into the html column in ascending order regarding their corresponding time
    
}