const DEFAULT_DISPLAY = 0;

let displayValue = DEFAULT_DISPLAY;
let number1 = displayValue; 
let number2;
let operation = null;
let resetScreen = false;

const calculator = document.querySelector("#container");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const allButtons = document.querySelectorAll("button");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const decimalBtn = document.querySelector("#decimal");


clearBtn.addEventListener('click', clearDisplay);
equalsBtn.addEventListener('click', evaluate);
deleteBtn.addEventListener('click', deleteNum);
decimalBtn.addEventListener('click', addDecimal);


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
    if(display.textContent.length >= 12 && display.textContent !== "Don't be silly") {
        return;
    }
    if(operation == null && resetScreen) {
        display.textContent = "";
        resetScreen = false;
    }
    if(operation !== null && resetScreen) {
        display.textContent = "";
        resetScreen = false;
    }
    display.textContent += number;
}

function inputOperator(operator) {
    if(operation !== null) evaluate();
    number1 = display.textContent;
    operation = operator;
    resetScreen = true;
}

function evaluate() {
    if (operation === null) return;
    if(operation === "/" && display.textContent === "0") {
        display.textContent = "Don't be silly"
        number1 = DEFAULT_DISPLAY;
        operation = null;
        resetScreen = true;
        return;
    }
    number2 = display.textContent;
    display.textContent = roundNumber(operate(operation, number1, number2));
    operation = null
    resetScreen = true;
}


function deleteNum() {
    display.textContent = display.textContent.toString().slice(0, -1);
}

function addDecimal() {
    if(display.textContent.includes(".")) {
        return;
    }
    display.textContent += ".";
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

function roundNumber (number) {
    return Math.round(number * 1000) / 1000;
}

window.onload = () => {
    display.innerText = displayValue;
}
