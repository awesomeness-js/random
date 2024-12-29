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