let a;
let b;
let operator;
const display = document.getElementById("display");
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

function populateDisplay(btn) {
    display.value += btn.innerText;
}

function clearDisplay() {
    display.value = "";
}

function equals() {
    //take the display and split into array with operators
    let e = display.value.split(/(\+|-|\*|\/)/);
    //solve for 1st 3 items in array
    a = operate(e[1], e[0], e[2]);
    //remove 1st 3 items and insert solved number at start of array
    numberArray.splice(0,3,a);
    //join the array into a string and update display
    let newDisplay = e.join('');
    display.value = newDisplay;
}