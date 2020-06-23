let displayNumber = "";
let currentOperation = "";
let result = 0;
let resultBox = document.getElementById("result");
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let addButton = document.getElementById("addition-button");
let minusButton = document.getElementById("substraction-button");
let divideButton = document.getElementById("division-button");
let multiplyButton = document.getElementById("multiplication-button");
let clearButton = document.getElementById("clear-button");
let deleteButton = document.getElementById("delete-button");
let equalButton = document.getElementById("equals-button");

function setNumButtons() {
    for (let i = 0; i < numbers.length; i++) {
        let digit = numbers[i].innerHTML;
        numbers[i].addEventListener("click", function numberClick() {
            if (currentOperation == "") {
                displayNumber+=digit;
                result = parseInt(displayNumber);
                resultBox.innerHTML = displayNumber;
            }
            else {
                displayNumber = "";
                displayNumber+=digit;
                resultBox.innerHTML = displayNumber;
                result = operationParser(currentOperation, result, parseInt(displayNumber));
            }
            console.log(result);
        });
    }
}

function setClearButton() {
    clearButton.addEventListener("click", function clearClick() {
        displayNumber = "";
        resultBox.innerHTML = displayNumber;
    });
}

function setDeleteButton() {
    deleteButton.addEventListener("click", function clearClick() {
        if (displayNumber != "") {
            displayNumber = displayNumber.slice(0, displayNumber.length - 1);
            resultBox.innerHTML = displayNumber;
        }
    });
}

function setOperationButtons() {
    for (let i = 0; i < operations.length; ++i) {
        operations[i].addEventListener("click", function operationClick() {
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
     });
 }

add = (x, y) => x + y;
subtract = (x, y) => x - y;
divide = (x, y) => x / y;
multiply = (x, y) => x * y;

setNumButtons();
setClearButton();
setDeleteButton();
setOperationButtons();
setEqualsButton();
