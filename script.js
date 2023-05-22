let a;
let b;
let operator;
let displayVal = ""; //internal value of display we keep for calculations
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

//perform our calculations
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

//keep track of updates to display
function populateDisplay(input) {
    displayVal += input;
    display.value = displayVal;
}

//clear display and all set variables
function clearDisplay() {
    displayVal = "";
    display.value = "";
    resetDecimalBtn();
    a = "";
    b = "";
    operator = "";
}

function equals() {
    if (a != "" && display.value != ""){
        b = display.value;
        let result = operate(operator, a, b);
        display.value = result;
        displayVal = "";
        a = "";
        b = "";
    }
    else if (a == "" || b == "") {
        // do nothing
        console.log("Not enough vars to calc with");
    }
}

//captures button input for display
function populateDigits() {
    const digitBtns = document.querySelectorAll(".digit");
    digitBtns.forEach((btn) => {
        btn.addEventListener("click", (btn) => {
            populateDisplay(btn.target.value);
            checkDecimal();
        })
    })
}

function checkOperators() {
    const operatorBtns = document.querySelectorAll(".operator");
    operatorBtns.forEach((btn) => {
        btn.addEventListener("click", (btn) => {
            let operatorNew = btn.target.value;
            if (operator == ""){
                operator = operatorNew;
            }
            if(a == "") {
                a = display.value;
                displayVal = "";
                operator = operatorNew;
            }
            else if(a != "" && displayVal != "") {
                b = display.value;
                let result = operate(operator, a, b);
                a = result;
                display.value = result;
                displayVal = "";
                operator = operatorNew;
            }
            resetDecimalBtn();
        })
    })
}

// prevent duplicate decimals from being entered in 1 number
function checkDecimal() {
    decimalBtn.addEventListener("click", () => {
        if(display.value.indexOf(".") >-1) {
            decimalBtn.disabled = true;
        }
    })
}

// enables decimal button
function resetDecimalBtn() {
    decimalBtn.disabled = false;
}

checkOperators();
populateDigits();