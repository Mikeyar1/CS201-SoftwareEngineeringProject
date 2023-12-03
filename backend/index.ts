import express from "express";
import { init } from "./database.js";
import AppRouter from "./routes/index.js";

const app = express();
const port = 8080;

// Use JSON to parse out the request body sent by a client of the API.
app.use(express.json());

// This is for CORS to allow all requests from all servers.
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// These are the routes added by the router.
app.use(AppRouter);

await init();

// const testCal1 = await Event.create({
// 	name: "TestCal1",
// 	description: "Test Calendar 1",
// 	weekday: "Monday",
// 	startTime: new Date("12-02-2023 01:00"),
// 	endTime: new Date("12-02-2023 02:00"),
// });

// const testCal2 = await Event.create(
// 	{
// 		name: "TestCal2",
// 		description: "Test Calendar 2",
// 		weekday: "Monday",
// 		startTime: new Date("12-02-2023 03:00"),
// 		endTime: new Date("12-02-2023 04:00"),
// 	},
// 	{
// 		include: [],
// 	}
// );

// // eslint-disable-next-line no-console
// console.log(testCal1);
// // eslint-disable-next-line no-console
// console.log(testCal2);

app.listen(port, "0.0.0.0", () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on port: ${port}`);
});

app.get("/", (req, res) => {
	res.send({ message: "OK" });
});

app.get("/calendar/:slug", (req, res) => {
	res.send({ message: `${req.params.slug}` });
});
