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
