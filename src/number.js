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