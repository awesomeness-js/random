/**
 * Generates a random string of a specified length.
 *
 * @param {Object} [options={}] - The options for generating the random string.
 * @param {number} [options.minLength=5] - The minimum length of the random string.
 * @param {number} [options.maxLength=8] - The maximum length of the random string.
 * @returns {string} A random string of random length between minLength and maxLength.
 */
export default ({
	minLength = 5,
	maxLength = 8
} = {}) => {
	
	// create a random string of random length
	const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;

};