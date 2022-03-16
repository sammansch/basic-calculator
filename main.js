const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("#equalsBtn");
const decimalPt = document.querySelector("#decimalBtn");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");

let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let resetDisplay = false;

numberBtn.forEach((button) =>
    button.addEventListener('click', () => displayNum(button.textContent))
)

operatorBtn.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
)

clear.addEventListener('click', () => clearDisplay());

equalBtn.addEventListener('click', () => evaluate());

function displayNum(num) {
    if (currentOperator === '') {
        firstNumber += num;
        display.textContent = firstNumber;
    } else {
        secondNumber += num;
        display.textContent = `${firstNumber} ${currentOperator} ${secondNumber}`;
    }
    console.log(`first: ${firstNumber}, second: ${secondNumber}, num: ${num}`);
}

function setOperator(operator) {
    firstNumber = display.textContent;
    currentOperator = operator;
    display.textContent = `${firstNumber} ${currentOperator} `;
}

function evaluate() {
    display.textContent = `${firstNumber} ${currentOperator} ${secondNumber}
                            = ${operate(currentOperator, firstNumber, secondNumber)}`;

}

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    display.textContent = '';
    resetDisplay = false;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            if (b === 0) return null
            else return divide(a, b);
    }
}