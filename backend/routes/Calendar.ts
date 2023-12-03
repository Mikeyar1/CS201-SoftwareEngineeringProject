import { Router } from "express";
import { Calendar, Events } from "../database.js";

const CalendarRouter = Router();

// http://localhost:8080/calendar/
CalendarRouter.get("/", async (req, res) => {
	const result = await Calendar.findAll();

	res.send(JSON.stringify(result));
});

// http://localhost:8080/calendar/:slug
CalendarRouter.get("/:slug", async (req, res) => {
	const calendarName = req.params.slug;

	const result = await Calendar.findOne({
		where: {
			calendarName,
		},
		include: Events,
	});

	res.send(JSON.stringify(result));
});

// http://localhost:8080/calendar/:slug
CalendarRouter.patch("/:slug", async (req, res) => {
	const calendarName = req.params.slug;
	const inputs = req.body;

	const result = await Calendar.findOne({
		where: {
			calendarName,
		},
	});

	const keys = Object.keys(inputs);

	// If nothing is found return HTTP 400, Bad Request
	if (result == null) {
		res.status(400);
		res.send();
		return;
	}

	// Re-assign value if value is defined
	for (const key in keys) {
		if (inputs[key]) result[key] = inputs[key];
	}

	await result.save();

	res.send(JSON.stringify(result));
});

// http://localhost:8080/calendar/create
CalendarRouter.post("/create", async (req, res) => {
	const inputs = req.body;

	const result = await Calendar.create({
		calendarName: inputs.name,
		description: inputs.description,
		user: inputs.user,
	});

	res.send(JSON.stringify(result));
});

// http://localhost:8080/calendar/:slug/addEvent
CalendarRouter.post("/:slug/addEvent", async (req, res) => {
	const calendarName = req.params.slug;
	const inputs = req.body;
	// Link event to calendar name in database
	const calendar = await Calendar.findOne({ where: { calendarName }, include: Events });

	// If nothing is found return HTTP 400, Bad Request
	if (calendar == null) {
		res.status(400);
		res.send();
		return;
	}

	const result = await Events.create({
		name: inputs.name,
		description: inputs.description,
		weekday: inputs.weekday,
		startTime: new Date(inputs.startTime),
		endTime: new Date(inputs.endTime),
	});

	// attach event to calendar
	calendar.addEvents(result);

	res.send(JSON.stringify(result));
});

export default CalendarRouter;
