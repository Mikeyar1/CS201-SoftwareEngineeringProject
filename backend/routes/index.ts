import { Router } from "express";
// Handles API requests related to calendars.
import CalendarRouter from "./Calendar.js";
import EventsRouter from "./Events.js";

const AppRouter = Router();

AppRouter.use("/calendar", CalendarRouter);
AppRouter.use("/events", EventsRouter);

export default AppRouter;
