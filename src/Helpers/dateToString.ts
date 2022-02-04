import moment from "moment";

/**
 * Converts a date object to a string according to a user-specified format.
 *
 * @author Salgado Ramírez Miguel A. <alejandrosram@outlook.com>
 */
const dateToString = (format: string, date: string | number | Date | moment.MomentInput, timezone: string): any => ({
	$dateToString : {
		format,
		date,
		timezone
	}
});

export default dateToString;
