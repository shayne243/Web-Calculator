let displayNumber = "";
let currentOperation = "";
let result = 0;
let negativeFlag = false;
let resultBox = document.getElementById("result");
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let addButton = document.getElementById("addition-button");
let minusButton = document.getElementById("substraction-button");
let divideButton = document.getElementById("division-button");
let multiplyButton = document.getElementById("multiplication-button");
let clearButton = document.getElementById("clear-button");
let equalButton = document.getElementById("equals-button");
let negativeButton = document.getElementById("negative-button");

function setNumButtons() {
    for (let i = 0; i < numbers.length; i++) {
        let digit = numbers[i].innerHTML;
        numbers[i].addEventListener("click", function numberClick() {
            if (currentOperation == "") {
                displayNumber+=digit;
                result = parseFloat(displayNumber);
                resultBox.innerHTML = displayNumber;
            }
            else {
                displayNumber+=digit;
                resultBox.innerHTML = displayNumber;
                result = operationParser(currentOperation, result, parseFloat(displayNumber));
            }
            console.log(result);
        });
    }
}

function setClearButton() {
    clearButton.addEventListener("click", function clearClick() {
        displayNumber = "";
        currentOperation = "";
        result = 0;
        negativeFlag = false;
        resultBox.innerHTML = displayNumber;
    });
}

function setOperationButtons() {
    for (let i = 0; i < operations.length; ++i) {
        operations[i].addEventListener("click", function operationClick() {
            displayNumber = "";
            negativeFlag = false;
            operationTemp = currentOperation = operations[i].innerHTML;
        });
    }
 }

 function operationParser(key, x, y) {
     switch (key) {
         case "+":
             return add(x, y);
             break;
        case "-": 
            return subtract(x, y);
            break;
        case "×":
            return multiply(x, y);
            break;
        case "÷":
            return divide(x, y);
            break;    
         default:
             break;
     }
 }

 function setEqualsButton() {
    equalButton.addEventListener("click", function equalClick() {
        console.log(result);
        resultBox.innerHTML = result.toString();
        displayNumber = "";
        currentOperation = "";
        negativeFlag = false;
    });
}

function setNegativeButton() {
    negativeButton.addEventListener("click", function negativeClick() {
        if (!negativeFlag) {
            negativeFlag = true;
            result*=-1;
            console.log(result);
            displayNumber = "-".concat(displayNumber);
            resultBox.innerHTML = displayNumber;
        }
        else {
            negativeFlag = false;
            result*=-1;
            console.log(result);
            displayNumber = displayNumber.slice(1);
            resultBox.innerHTML = displayNumber;
        }
    })
}

add = (x, y) => x + y;
subtract = (x, y) => x - y;
divide = (x, y) => x / y;
multiply = (x, y) => x * y;

setNumButtons();
setClearButton();
setOperationButtons();
setEqualsButton();
setNegativeButton();
