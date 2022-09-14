function editDate(str) {
	const num = str.split('-')
	console.log(num);

	let result = '-'
	for (let i = 0; i < num.length; i++) {
		result = num[2] + '/' + num[1] + '/' + num[0];
	}

	return result

}

console.log(editDate('2025-12-31'))

//done!