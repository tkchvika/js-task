let a;
let b;
a = parseFloat(window.prompt('number 1'));
b = parseFloat(window.prompt('number 2'));
let rest = a % b;
if (rest != 0) {
	alert('Ділиться з залишком ' + rest);
} else {
	alert('Ділиться, результат ділення: ' + (a / b));
}

//done!