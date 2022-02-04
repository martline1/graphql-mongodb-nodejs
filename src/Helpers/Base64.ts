/**
 * A set of functions to work with base64 encoding
 * 
 * @author Yael Mártin A. Alcalá León <yael.alcalla@gmail.com>
 */
class Base64 {
	/** Encodes a string to base64 */
	static encode(str: string): string {
		return Buffer.from(str, "binary").toString("base64");
	}

	/** Decodes a string from base64 */
	static decode(str: string): string {
		return Buffer.from(str, "base64").toString();
	}
}

export default Base64;
