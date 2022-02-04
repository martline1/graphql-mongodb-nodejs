/**
 * Returns true if value is in the given array
 * 
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */
const isInArray = (arr: any[], value: any): boolean => Boolean(~(arr.indexOf(value)));

export default isInArray;
