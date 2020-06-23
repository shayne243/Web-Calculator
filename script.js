let displayNumber = "";
let resultBox = document.getElementById("result");
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation")
let clearButton = document.getElementById("clear-button");
let deleteButton = document.getElementById("delete-button");

function setNumButtons() {
    for (let i = 0; i < numbers.length; i++) {
        let digit = numbers[i].innerHTML;
        numbers[i].addEventListener("click", function numberClick() {
            displayNumber+=digit;
            resultBox.innerHTML = displayNumber;
        });
    }
}

function setClearButton() {
    clearButton.addEventListener("click", function clearClick() {
        displayNumber = "";
        resultBox.innerHTML = displayNumber;
    })
}

function setDeleteButton() {
    deleteButton.addEventListener("click", function clearClick() {
        if (displayNumber != "") {
            displayNumber = displayNumber.slice(0, displayNumber.length - 1);
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
setDeleteButton();