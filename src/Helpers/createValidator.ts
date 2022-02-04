import { validationResult }                from "express-validator";
import { Request, Response, NextFunction } from "express";

/**
 * Maps the express validator to a set of validations and returns
 * the validation result to the client if needed.
 *
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */
const createValidator = (validations: any[]) => [
	...validations,
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			return next();
		}

		return res.status(400).send({
			err : errors.array(),
		});
	},
];

export default createValidator;
