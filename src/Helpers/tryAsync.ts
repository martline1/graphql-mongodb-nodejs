/**
 * Handles the errors of any promise to avoid try catch hell
 *
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param _promise Promise to await and handle error
 * @returns An array with the data or error
 */
const tryAsync = async <T>(_promise: Promise<T>): Promise<[null | T, null | any]> => {
	try {
		const data = await _promise;

		return [data, null];
	} catch (err) {
		return [null, err];
	}
};

export default tryAsync;
