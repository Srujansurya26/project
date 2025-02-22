let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";

function appendValue(value) {
    if (["+", "-", "*", "/"].includes(value)) {
        if (firstOperand === "") {
            firstOperand = currentInput;
            currentInput = "";
        }
        operator = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = firstOperand + " " + operator + " " + currentInput;
}

function clearDisplay() {
    currentInput = "";
    firstOperand = "";
    operator = "";
    display.value = "";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (firstOperand !== "" && operator !== "" && currentInput !== "") {
        let result;
        let num1 = parseFloat(firstOperand);
        let num2 = parseFloat(currentInput);

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Error"; // Avoid division by zero
                break;
            default:
                result = "Error";
        }

        display.value = result;
        firstOperand = result.toString();
        currentInput = "";
        operator = "";
    }
}
