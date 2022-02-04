import { Request, Response, NextFunction } from "express";

// Import Own Modules
import { JWT_KEY }        from "~/Config/constants";
import JWT                from "~/Helpers/JWT";
import tryAsync           from "~/Helpers/tryAsync";
import verifyTokenPromise from "~/Helpers/verifyTokenPromise";

/**
 * Creates a middleware that checks if a given token is valid and
 * has the specied reason in its payload, if the token is valid
 * and the specied reason match, the JWT_Decoded token would be in
 * res.locals
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param reason JWT reason
 */
const withToken = (reason: JWT.Reason) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (req.method === "HEAD" || req.method === "OPTIONS") {
			return next();
		}

		if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
			return res.status(401).send({
				err : "Denied access, you have to include a token",
			});
		}

		const token: string = req.headers.authorization.split(" ")[1];

		let isErrored: boolean = false;
		let result: JWT.Decoded | null = null;

		const [data, error] = await tryAsync(verifyTokenPromise(token, JWT_KEY));

		// If this isn't a google token we have to also validate that the reason is
		// the same as the one received as a parameter for "withToken" function
		if (error || !data?.data || !data?.reason || data?.reason !== reason) {
			isErrored = true;
		}

		result = data;

		if (isErrored) {
			return res.status(401).send({
				err : "Invalid token"
			});
		}

		// Add the token to locals so it can be accessed in the life
		// time of a request
		res.locals.token = result;

		return next();
	} catch (err) {
		console.error("[withToken] ", err);

		return res.status(500).send({ err });
	}
};

export default withToken;
