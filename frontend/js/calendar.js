const baseURL = "http://localhost:8080";

async function getURL(url) {
  const res = await fetch(url);
  return await res.json();
}

async function postURL(url, data) {
  const res = await fetch(url, {
    method: "POST",
    body: data,
  });
  return await res.json();
}

async function getAllCalendars() {
  return await getURL(`${baseURL}/calendar`);
}

async function getCalendar(name) {
  return await getURL(`${baseURL}/calendar/${name}`);
}

async function makeCalendar(name, description, user) {
  return await fetch(`${baseURL}/calendar/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, user }),
  });
}

async function makeEvent(
  name,
  description,
  startTime,
  endTime,
  days,
  calendar
) {
  return await fetch(`${baseURL}/calendar/${calendar}/addEvent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      weekday: days,
      startTime,
      endTime,
    }),
  });
}

//   async function getAllEvents() {
//     const calendarObj = await getCalendar(window.calendarName);
//     const events = calendarObj.Events;
//     for (let i = 0; i < events.length; i++) {
//       // append a new option in the dropdown showing a list of event names
//       var option = document.createElement("option");
//       option.text = events[i].name;
//       option.value = events[i].name;
//       option.id = `event${i}`;
//       document.getElementById("eventList").appendChild(option);
//     }
//   }
//   getAllEvents();
// Not functional yet
//   async function deleteEvent(eventName) {
//     return await fetch(`${baseURL}/events/${eventName}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name: eventName }),
//     });
//     location.reload();
//   }

//   async function editEvent(eventName) {
//     return await fetch(`${baseURL}/events/${eventName}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name: eventName }),
//     });
//     location.reload();
//   }
