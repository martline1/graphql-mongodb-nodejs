import {
	Request,
	Response,
	NextFunction,
} from "express";
import { Permission, Query } from "accesscontrol";

// Import Own Modules
import { ac }    from "~/Access";
import { JWT }   from "~/Helpers";
import withToken from "./withToken";

type withPermissionCallback = (query: Query) => Permission;

/**
 * Middleware used to control the acces to certain route depending on their role
 *
 * @author Alcalá León Yael Märtin A. <yael.alcalla@gmail.com>
 * @param callback 
 * @returns 
 */
const withPermission = (callback: withPermissionCallback, reason: JWT.Reason = JWT.Reason.AUTH) => [
	// We need to be logged in
	withToken(reason),

	// Then we verify our permissions based on the token data
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const role = (res.locals.token as JWT.Decoded).data.role as string;
	
			const permission = callback(ac.can(role));
	
			if (permission.granted) {
				return next();
			}
	
			return res.status(403).end();
		} catch (err) {
			console.error("[withPermission] ", err);
	
			return res.status(500).send("Internal server error");
		}
	},
];

export default withPermission;
