const DEFAULT_DISPLAY = 0;


const calculator = document.querySelector("#container");
const screen = document.querySelector("#screen");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const topRow = document.querySelector("#top-row");

let displayValue = DEFAULT_DISPLAY;
let number1 = displayValue; 
let number2;
let operator;

screen.innerText = displayValue;

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayValue = e.target.innerText;
        screen.innerText = displayValue;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.innerText;
    })
})


// calculator.insertBefore(screen);



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


