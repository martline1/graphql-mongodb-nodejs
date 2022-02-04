/**
 * Validates a date and returns a Date instance or false
 * if an invalid date is given
 *
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */
const parseDate = (date: any): Date | boolean => {
    const newDate = new Date(date);

    return newDate instanceof Date && !isNaN(newDate as any)
        ? newDate
        : false;
};

export default parseDate;
