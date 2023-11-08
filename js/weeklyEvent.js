<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors : Weekly Events</h2>

<p id="demo"></p>

<script>
// Constructor function for weeklyEvent objects
  // parameters should be taken from the form
function weeklyEvent(eventName, eventWeekday, startTime, endTime) {
  this.name = eventName;
  this.weekday = eventWeekday;
  this.start = startTime;
  this.end = endTime;
}

// Create an object to test with
//need to have this happen within the php file
const CSEClass = new weeklyEvent("CSE 201", "W", "8:30", "9:50");
const ENGClass = new weeklyEvent("ENG 313", "M", "1:15", "2:30");

// Display class
document.getElementById("demo").innerHTML =
"I have " + CSEClass.name + " at " + CSEClass.start + " " + CSEClass.weekday + "."; 
</script>

</body>
</html>
