function doublePositiveNumber(num) {
	if (num >= 0) {
		result = num * 2;
	} else {
		result = 'error';
	}
	return result;
}

console.log(doublePositiveNumber(-4));
console.log(doublePositiveNumber(10));
console.log(doublePositiveNumber(6));
console.log(doublePositiveNumber(88));
console.log(doublePositiveNumber(56));

//done!