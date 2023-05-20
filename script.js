let a;
let b;
let operator;
let displayVal = "";
const display = document.getElementById("display");
const decimalBtn = document.getElementById("decimal");

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
    if(b == 0) {
        alert("Sorry! You can't divide by 0 :(");
        return "";
    }
    else {
        return a / b;
    }
    
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

function displayReset(result) {
    displayVal = result;
    display.value = result;
    decimalBtn.disabled = false;
    a = "";
    b = "";
    operator = "";
}

function populateDisplay(input) {
    //keep track of updates to display
    displayVal += input;
    display.value = displayVal;
}

function clearDisplay() {
    displayReset("");
}

function equals() {
    b = displayVal;
    result = operate(operator, a, b);
    a = result;
    display.value = result;
    result = "";
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
            if(a) {
                if(operator = operator){
                    b = display.value;
                    result = operate(operator, a, b);
                    a = result;
                    result = "";
                    display.value = a;
                }
                else {
                    b = displayVal;
                    result = operate(operator, a, b);
                    a = result;
                    result = "";
                    display.value = a;
                }
            }
            else {
                a = displayVal;
            }
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