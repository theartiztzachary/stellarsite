export function isNumericString(string: string): boolean { //returns TRUE if it is a number, and FALSE if it is not
	if (typeof string !== 'string' || string.trim() === '') {
		return false; //given input is not a string or empty string
	}

	const num = Number(string); //attempts to convert the string to a number

	return !isNaN(num) && isFinite(num); //checks if the conversion was successful and a finite number
};