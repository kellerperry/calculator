let number1;
let number2;
let operator;


function operate (operator, number1, number2) {
    if (operator === "+") return addition(number1, number2);
    if (operator === "-") return subtraction(number1, number2);
    if (operator === "*") return multiplication(number1, number2);
    if (operator === "/") return division(number1, number2);
}

function addition (num1, num2) {   
    return num1 + num2;
}

function subtraction (num1, num2) {
    return num1 - num2;
}

function multiplication (num1, num2) {
 return num1 * num2;
}

function division (num1, num2) {
 return num1 / num2;
}


