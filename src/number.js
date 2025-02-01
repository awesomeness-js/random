/**
 * Generates a random number within a specified range and with a specified number of decimal places.
 *
 * @param {Object} [options] - The options for generating the random number.
 * @param {number} [options.min=0] - The minimum value of the range.
 * @param {number} [options.max=100] - The maximum value of the range.
 * @param {number} [options.places=3] - The number of decimal places.
 * @returns {number} A random number within the specified range and with the specified number of decimal places.
 */
export default ({
	min = 0, 
	max = 100,
	places = 3
} = {}) => {
	
	const num = Math.floor(Math.random() * (max - min + 1)) + min;
	const decimal = Math.pow(10, places);
	const decNumber = Math.floor(Math.random() * decimal) / decimal;
	return num + decNumber;
	
};