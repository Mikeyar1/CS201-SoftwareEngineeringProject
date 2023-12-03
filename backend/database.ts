import { Sequelize, DataTypes } from "sequelize";

// Delcare our sequelize object here.
let sequelize: Sequelize;

// Declare our models here.
import { Events } from "./models/Events.js";
import { Calendar } from "./models/Calendar.js";

/**
 * Create the DB with options from the config.
 * @returns A fully made Sequelize object.
 */
function createConnection() {
	// SQlite doesn't need normal database entries.

	return new Sequelize({
		dialect: "sqlite",

		// Where the sqlite3 database will sit.
		storage: "./data/data.sqlite",

		// eslint-disable-next-line no-console
		logging: (query) => console.log(query),

		pool: {
			// Max number of clients
			max: 25,
			// Min number of clients
			min: 0,
			// Idle time for a client
			idle: 20000,
		},
	});
}

/**
 * Initialize the database manager.
 */
export async function init(): Promise<void> {
	// Reassign our sequelize variable to make sure we can access our sequelize object.
	// The init function should only be called up first load, so that's why we do it.
	// If the connection is closed then the sequelize.connectionManager.getConnection will throw an error and crash the application.
	sequelize = createConnection();

	try {
		await sequelize.authenticate();
		tableInit();
		await sequelize.sync();
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err);
	}
}

/**
 * Destroy the database manager.
 */
export async function destroy(): Promise<void> {
	try {
		await sequelize.close();
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err);
	}
}

function tableInit() {
	Events.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			weekday: DataTypes.STRING,
			startTime: DataTypes.DATE,
			endTime: DataTypes.DATE,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{ sequelize, modelName: "Event" }
	);
	Calendar.init(
		{
			user: DataTypes.STRING,
			calendarName: DataTypes.STRING,
			description: DataTypes.STRING,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{ sequelize, modelName: "Calendar" }
	);

	Calendar.hasMany(Events, { foreignKey: "calendarId" });
	Events.belongsTo(Calendar, { foreignKey: "calendarId" });
}

export { Events, Calendar };
