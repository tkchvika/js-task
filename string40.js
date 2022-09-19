function maskify(str) {
	if (str.length < 5) {
		return str
	}
	let result = ''
	for (let i = 0; i < str.length - 4; i++) {
		result += '#'
	}

	result = result + str[str.length - 4] + str[str.length - 3] + str[str.length - 2] + str[str.length - 1]

	return result
}

console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify(''));
console.log(maskify('Skippy'));
console.log(maskify('Nananananananananananananananana Batman!'));

//done!