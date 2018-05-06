alert ('javascript funcionando de boa!');

document.getElementById("calculate-button").onclick = function () {
	// Collect numbers inside the input box  
	let elem1 = document.getElementById('elem-1'); 
	let elem2 = document.getElementById('elem-2'); 

	// What is written inside the boxes has to have a number value
	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value); 

	// Select the right operation button
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult(val1, val2, operation);	

		console.log(val1);
		console.log(val2);			
		console.log(operation);

// Display result inside element with id "result"

let resultElement = document.getElementById('result');
resultElement.innerHTML=operationResult;

	if (isNaN(val1)) {
	resultElement.innerHTML='Insira números nas caixas acima para podermos te apresentar o resultado da sua conta! :)'}
	else if (isNaN(val2)) { 
	resultElement.innerHTML='Insira números nas caixas acima para podermos te apresentar o resultado da sua conta! :)'};
}

/**
 * Returns the result of an operation over two numbers.
 * Arguments: two valid numbers and one operation symbol.
 * Supports sum, substraction, multiplication and division.
 */

function getResult (val1, val2, operation) {
if (operation === '+') {
	return val1+val2;
} else if (operation === '-') {
	return val1-val2;
} else if (operation === '*') {
	return val1*val2;
} else if (operation === '/') {
	return val1/val2; } 
}

