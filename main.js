const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("#equalsBtn");
const decimal = document.querySelector("#decimalBtn");
const display = document.querySelector(".display");
const clear = document.querySelector("#clear");
const backBtn = document.querySelector("#delete");

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

decimal.addEventListener('click', () => addDecimal(decimal.textContent));

clear.addEventListener('click', () => clearDisplay());

backBtn.addEventListener('click', () => backspace());

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

function addDecimal(decimal) {
    if(firstNumber === "") {
        firstNumber = "0" + decimal;
        display.textContent = firstNumber;
    }
    else if(firstNumber != "" || secondNumber === "") {
        firstNumber = display.textContent += decimal;
    } 
    else if (currentOperator != "" && secondNumber != "") {        
        secondNumber = display.textContent += decimal;
    }
}

function setOperator(operator) {
    firstNumber = display.textContent;
    currentOperator = operator;
    display.textContent = `${firstNumber} ${currentOperator} `;
}

function evaluate() {
    if (firstNumber === "") {
        display.textContent = "0";
    }
    else {
        display.textContent = `${firstNumber} ${currentOperator} ${secondNumber}
                            = ${operate(currentOperator, firstNumber, secondNumber)}`;
    }
}

function backspace(){
    if (secondNumber != "") {
        secondNumber = "";
        display.textContent = `${firstNumber} ${currentOperator} `;
    }
    else if (secondNumber === "" && currentOperator != ""){
        currentOperator = "";
        display.textContent = `${firstNumber}`;
    }
    else if (secondNumber === "" && currentOperator === "") {
        return clearDisplay();
    }
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
    if (b === 0) {
        return "stop rn, you can\'t do that";
    } 
    else {
        return a / b;
    }   
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
            return divide(a, b);
    }
}