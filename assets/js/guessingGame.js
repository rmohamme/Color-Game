var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var i;

init();

function init() {

    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (i = 0; i < squares.length; i++) {

        //add click listeners to squares 
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(pickedColor);
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#525052";
            }
        });
    }
}

function reset() {
    colors = randomColors(numberOfSquares);
    //pick a new random color from array 
    pickedColor = pickColor();

    displayColor.textContent = pickedColor;

    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = " ";
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    //loop through and change color
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = pickedColor;
}

function randomColors(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        var randomNumber1 = Math.floor(Math.random() * 256);
        var randomNumber2 = Math.floor(Math.random() * 256);
        var randomNumber3 = Math.floor(Math.random() * 256);

        temp[i] = "rgb(" + randomNumber1 + ", " + randomNumber2 + ", " + randomNumber3 + ")";
        console.log(temp[i]);

    }

    return temp
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
