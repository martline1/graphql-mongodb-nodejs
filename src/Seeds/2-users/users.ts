import { faker }       from "@faker-js/faker";
import { getObjectId } from "mongo-seeding";
import bcrypt          from "bcryptjs";

// Import Own Modules
import { IUser } from "../../Modules/Users/User.model";
import { Role }  from "../../Access";

const passwordHash = bcrypt.hashSync("Password123", 16);

const users: Partial<IUser>[] = [
	{
		_id              : getObjectId("user0"),
		groupId          : getObjectId("direction") as any,
		name             : "John Doe",
		email            : "john@gmail.com",
		password         : passwordHash,
		role             : Role.ADMINISTRATOR,
		active           : true,
		position         : "Presidente del comité de Denuncias",
		password_changed : true,
	},
	{
		_id              : getObjectId("user1"),
		groupId          : getObjectId("direction") as any,
		name             : "Natalia Rodríguez",
		email            : "nat@gmail.com",
		password         : passwordHash,
		role             : Role.ADMINISTRATOR,
		active           : true,
		position         : "Vicepresidente del comité de Denuncias",
		phone            : faker.phone.phoneNumber(),
		password_changed : false,
	},
	...Array.from({ length : 30 }).map((value, index) => ({
		_id              : getObjectId("user" + (index + 2)),
		name             : faker.name.findName(),
		email            : faker.internet.email(),
		password         : passwordHash,
		role             : Role.COLLABORATOR,
		active           : Math.random() > 0.3,
		password_changed : Math.random() > 0.5,
		...(Math.random() > 0.3
			? { phone : faker.phone.phoneNumber() }
			: {}),
	})),
];

module.exports = users;
