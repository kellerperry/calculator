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
const clearBtn = document.querySelector("#clear");


clearBtn.addEventListener('click', clearDisplay);


updateDisplay();


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
    display.textContent += number;
}

function inputOperator(operator) {
    if (operation !== null)
    number1 = display.textContent;
    operation = operator;
}

function operate (operator, number1, number2) {
    if (operator === "+") return number1 + number2;
    if (operator === "-") return number1 - number2;
    if (operator === "*") return number1 * number2;
    if (operator === "/") return number1 /number2;
}


function updateDisplay() {
    display.innerText = displayValue;
}

function clearDisplay() {
    display.innerText = DEFAULT_DISPLAY;
    operator = "";
    number1 = DEFAULT_DISPLAY;
    number2 = "";
}


