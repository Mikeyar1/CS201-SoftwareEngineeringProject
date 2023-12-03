import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	HasManyGetAssociationsMixin,
	HasManySetAssociationsMixin,
} from "sequelize";
import { Calendar } from "./Calendar";

export interface Events extends Model<InferAttributes<Events>, InferCreationAttributes<Events>> {
	getCalendar: HasManyGetAssociationsMixin<Calendar>;
	setCalendar: HasManySetAssociationsMixin<Calendar, string>;
}

export class Events extends Model<InferAttributes<Events>, InferCreationAttributes<Events>> {
	declare name: string;
	declare description: string;
	declare weekday: string;
	declare startTime: Date;
	declare endTime: Date;

	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;

	// getName(): NonAttribute<string> {
	// 	return this.firstName + this.lastName;
	// }
}
