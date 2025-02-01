/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {Object} [options={}] - The options object.
 * @param {number} [options.min=0] - The minimum value (inclusive).
 * @param {number} [options.max=100] - The maximum value (inclusive).
 * @returns {number} A random integer between the specified min and max values.
 */
export default ({ 
	min = 0, 
	max = 100 
} = {}) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};