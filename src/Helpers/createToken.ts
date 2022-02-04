import jsonwebtoken from "jsonwebtoken";
import moment       from "moment";

// Import Own Modules
import JWT from "./JWT";
import {
	JWT_KEY,
	JWT_LIFE_UNIT,
	JWT_LIFE_AMOUNT,
} from "~/Config/constants";

/**
 * Generates a signed token
 *
 * @author Yael Mártin A. Alcalá León <yael.alcalla@gmail.com>
 * @param payload token body
 */
const createToken = (
	reason: JWT.Reason,
	payload: Record<string, any>,
	expiration?: {
		amount : moment.DurationInputArg1,
		unit   : moment.unitOfTime.DurationConstructor,
	},
) => {
	payload.created_at   = Date.now();
	payload.renovated_at = null;

	const lifeOfToken = expiration
		? [expiration.amount, expiration.unit]
		: [JWT_LIFE_AMOUNT, JWT_LIFE_UNIT];

	payload.expiration = moment().add(...lifeOfToken).valueOf();

	return jsonwebtoken.sign(
		{
			reason,
			data : payload,
		},
		JWT_KEY,
		{
			expiresIn : payload.expiration,
		},
	);
};

export default createToken;
