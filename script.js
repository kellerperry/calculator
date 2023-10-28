const DEFAULT_DISPLAY = 0;

let displayValue = DEFAULT_DISPLAY;
let number1 = displayValue; 
let number2;
let operation = null;

const calculator = document.querySelector("#container");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const allButtons = document.querySelectorAll("button");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");


clearBtn.addEventListener('click', clearDisplay);
equalsBtn.addEventListener('click', evaluate);


numberButtons.forEach(button => 
    button.addEventListener('click', () => inputNumber(button.textContent))
)

operatorButtons.forEach(button => 
    button.addEventListener('click', () => inputOperator(button.textContent))
)


function inputNumber(number) {
    if(display.textContent === "0") {
        display.textContent = "";
    }
    if(operation !== null) {
        display.textContent = "";
    }
    display.textContent += number;
}

function inputOperator(operator) {
    if(operation !== null) evaluate();
    number1 = display.textContent;
    operation = operator;
}

function evaluate() {
    number2 = display.textContent;
    display.textContent = operate(operation, number1, number2);
    operation = null
}


function operate (operator, number1, number2) {
    if (operator === "+") return addition(number1, number2);
    if (operator === "-") return subtraction(number1, number2);
    if (operator === "*") return multiplication(number1, number2);
    if (operator === "/") return division(number1, number2);
}

function addition (num1, num2) {   
    return +num1 + +num2;
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


function updateDisplay() {
    display.innerText = displayValue;
}

function clearDisplay() {
    display.innerText = DEFAULT_DISPLAY;
    operation = null;
    number1 = DEFAULT_DISPLAY;
    number2 = "";
}

window.onload = () => {
    display.innerText = displayValue;
}
