let a;
let b;
let operator;
const display = document.getElementById("display");

function add(a,b) {
    return a + b;
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
    return operator(a,b);
}

function populateDisplay(btn) {
    display.value += btn.innerText;
}

function clearDisplay() {
    display.value = " ";
}