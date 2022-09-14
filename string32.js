function symbolReplacement(str) {
	const symbol = str.split('-')
	console.log(symbol);

	let result = '-'
	for (let i = 0; i < symbol.length; i++) {
		result = symbol[0] + '!' + symbol[1] + '!' + symbol[2];
	}

	return result

}

console.log(symbolReplacement('Я-вчу-javascript!'))

//done!