import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	HasManyAddAssociationMixin,
	HasManyGetAssociationsMixin,
	HasManySetAssociationsMixin,
} from "sequelize";
import { Events } from "./Events";

export interface Calendar extends Model<InferAttributes<Calendar>, InferCreationAttributes<Calendar>> {
	addEvents: HasManyAddAssociationMixin<Events, string>;
	getEvents: HasManyGetAssociationsMixin<Events>;
	setEvents: HasManySetAssociationsMixin<Events, string>;
}

export class Calendar extends Model<InferAttributes<Calendar>, InferCreationAttributes<Calendar>> {
	declare user: string;
	declare calendarName: string;
	declare description: string;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	// getName(): NonAttribute<string> {
	// 	return this.firstName + this.lastName;
	// }
}
