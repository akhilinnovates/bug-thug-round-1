const playerOneBtn = document.querySelector("#player1btn");
const playerTwoBtn = document.querySelector("#player2btn");
const resetBtn = document.querySelector("#reset");
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");
const input = document.querySelector("#maxScore");

playerOneScore.innerText = "0";
playerTwoScore.innerText = "0";

let scoreOfOne = 0;
let scoreOfTwo = 0;
let winner = false;

function scoreIncreaserbtn1() {
    scoreOfOne = Number(playerOneScore.innerText);

    if (scoreOfOne < Number(input.value) && winner === false) {
        scoreOfOne += 1;
    }

    playerOneScore.innerText = scoreOfOne;
}

function scoreIncreaserbtn2() {
    scoreOfTwo = Number(playerTwoScore.innerText);

    if (scoreOfTwo < Number(input.value) && winner === false) {
        scoreOfTwo += 1;
    }

    playerTwoScore.innerText = scoreOfTwo;
}

playerOneBtn.addEventListener('click', scoreIncreaserbtn1);
playerTwoBtn.addEventListener('click', scoreIncreaserbtn2);

playerOneBtn.addEventListener('click', function () {
    if (Number(playerOneScore.innerText) === Number(input.value)) {

        if (scoreOfOne < scoreOfTwo) {
            playerOneScore.style.color = "red";
            playerTwoScore.style.color = "green";
        } else {
            playerOneScore.style.color = "green";
            playerTwoScore.style.color = "red";
        }

        playerOneBtn.disabled = true;
        playerTwoBtn.disabled = true;
        winner = true;
    }
});

playerTwoBtn.addEventListener('click', function () {
    if (Number(playerTwoScore.innerText) === Number(input.value)) {

        if (scoreOfOne < scoreOfTwo) {
            playerOneScore.style.color = "red";
            playerTwoScore.style.color = "green";
        } else {
            playerOneScore.style.color = "green";
            playerTwoScore.style.color = "red";
        }

        playerOneBtn.disabled = true;
        playerTwoBtn.disabled = true;
        winner = true;
    }
});

resetBtn.addEventListener('click', function () {
    playerOneScore.innerText = "0";
    playerTwoScore.innerText = "0";

    scoreOfOne = 0;
    scoreOfTwo = 0;

    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";

    playerOneBtn.disabled = false;
    playerTwoBtn.disabled = false;

    winner = false;
});
