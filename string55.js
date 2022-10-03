
const studentsPerTable = 2;
const students = parseInt(prompt('number of students'));
const tables = parseInt(prompt('number of desks'));

if (tables * studentsPerTable >= students) {
	alert(Math.floor(tables - students / studentsPerTable) + ' tables overplus');
} else {
	alert(Math.ceil(students / studentsPerTable - tables) + ' tables not enought');
}

//done!