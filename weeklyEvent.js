<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>

<p id="demo"></p>

<script>
// Constructor function for weeklyEvent objects
function weeklyEvent(eventName, eventWeekday, startTime, endTime) {
  this.name = eventName;
  this.weekday = eventWeekday;
  this.start = startTime;
  this.end = endTime;
}

// Create an object
const CSEClass = new weeklyEvent("CSE 201", "W", "8:30", "9:50");

// Display age
document.getElementById("demo").innerHTML =
"I have " + CSEClass.name + " at " + CSEClass.start + " " + CSEClass.weekday + "."; 
</script>

</body>
</html>
