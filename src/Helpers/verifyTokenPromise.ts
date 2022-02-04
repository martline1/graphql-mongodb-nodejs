import jsonwebtoken from "jsonwebtoken";

// Import Own Modules
import JWT from "~/Helpers/JWT";

type VerifyTokenPromiseFn = (token: string, key: string) => Promise<JWT.Decoded>;

/**
 * Same jsonwebtoken.verify function, but with an async/await behaviour
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param token 
 * @param key 
 */
const verifyTokenPromise: VerifyTokenPromiseFn = (token, key) => new Promise((resolve, reject) => {
	jsonwebtoken.verify(token, key, (err, decoded) => {
		if (err || !decoded) {
			return reject(err);
		}

		return resolve(decoded as JWT.Decoded);
	})
});

export default verifyTokenPromise;
