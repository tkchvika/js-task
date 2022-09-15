function century(year) {
	return {
		'століття': 1 + Math.trunc(year / 100),
	};
}

console.log(2020, century(2020));
console.log(1705, century(1705));
console.log(1900, century(1900));
console.log(1601, century(1601));
console.log(1850, century(1850));

//done!