import { AccessControl } from "accesscontrol";

// Import Own Modules
import Role from "./role";

/**
 * Defines all the permissions for the app, this is linked to the
 * defined user roles.
 *
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */
const ac = new AccessControl();

ac
	.grant(Role.ADMINISTRATOR)
		.create("users")
		.read("users")
		.update("users")
		.delete("users")

		.create("groups")
		.update("groups")
		.delete("groups")
	.lock();

export default ac;
