import { Router } from "express";
import { Events } from "../database.js";

const EventsRouter = Router();

// http://localhost:8080/events/:slug
EventsRouter.patch("/:slug", async (req, res) => {
	const eventName = req.params.slug;
	const inputs = req.body;

	const result = await Events.findOne({
		where: {
			name: eventName,
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

// http://localhost:8080/events/:slug
EventsRouter.delete("/:slug", async (req, res) => {
	const eventName = req.params.slug;

	const result = await Events.findOne({
		where: {
			name: eventName,
		},
	});

	await result?.destroy();
});

export default EventsRouter;
