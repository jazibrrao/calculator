let a;
let b;
let operator;
const display = document.getElementById("display");
let displayVal = "";
const decimalBtn = document.getElementById("decimal");
const operators = ["+", "-", "/", "*"];

function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}

function populateDisplay(input) {
    //keep track of updates to display
    displayVal += input;
    display.value = displayVal;
}

function displayReset(result) {
    if(result) {
        displayVal = result;
        display.value = result;
        decimalBtn.disabled = false;
    }
}

function clearDisplay() {
    display.value = "";
    displayVal = "";
    decimalBtn.disabled = false;
}

function equals() {
    // //take the display and split into array with operators
    // let e = display.value.split(/(\+|-|\*|\/)/);
    b = displayVal;
    let result = operate(operator, a, b);
    displayReset(result);
}

function populateDigits() {
    const digitBtns = document.querySelectorAll(".digit");
    digitBtns.forEach((btn) => {
        btn.addEventListener("click", (btn) => {
            populateDisplay(btn.target.value);
            checkDecimals();
        })
    })
}

function checkOperators() {
    const operatorBtns = document.querySelectorAll(".operator");
    operatorBtns.forEach((btn) => {
        btn.addEventListener("click", (btn) => {
            operator = btn.target.value;
            a = displayVal;
            displayVal = "";
            decimalBtn.disabled = false;
        })
    })
}

// prevent duplicate decimals from being entered in 1 number
function checkDecimals() {
    decimalBtn.addEventListener("click", () => {
        if(display.value.indexOf(".") >-1) {
            decimalBtn.disabled = true;
        }
    })

}

checkOperators();
populateDigits();