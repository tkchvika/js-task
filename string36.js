function transformFirstLettrsEachWord(str) {
	const words = str.split(' ')
	console.log(words);

	let result = ''
	for (let i = 0; i < words.length; i++) {
		result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' '
	}

	return result
}

console.log(transformFirstLettrsEachWord('i like eat'))

//done!