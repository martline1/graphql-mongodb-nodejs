/**
 * Returns true if it's a valid date
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 * @param date
 * @returns 
 */
const isValidDate = (date: any): Boolean => {
    const newDate = new Date(date);

    return newDate instanceof Date && !isNaN(newDate as any);
};

export default isValidDate;
