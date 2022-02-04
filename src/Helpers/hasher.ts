import bcrypt from "bcryptjs";

/**
 * Hashes a password
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param password 
 */
export const hashPassword = async (password: string): Promise<string> => {
	const salt        = await bcrypt.genSalt(16);
	const newPassword = await bcrypt.hash(password, salt);

	return newPassword;
};

/**
 * Tests a string against a hash
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param test 
 * @param hash 
 */
export const comparePassword = async (test: string, hash: string): Promise<boolean> => {
	return bcrypt.compare(test, hash);
};
