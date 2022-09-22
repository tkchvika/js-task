function doublePositiveNumber(num) {
	if (num > 0) {
		result = num * 2;
	} else if (num == 0) {
		result = 'null';
	} else {
		result = 'error';
	}
	return result;
}


console.log(doublePositiveNumber(7));
alert(doublePositiveNumber(0)); //якщо сповіщенням...
console.log(doublePositiveNumber(-5));

//done!