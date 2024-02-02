const choices = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.querySelector('.result');
const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = choices[Math.floor(Math.random() * choices.length)];
    return randomNum;
}
const computerSelection = getComputerChoice();
const playerSelection = [rockBtn, paperBtn, scissorsBtn];


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || 
    playerSelection === 'paper' && computerSelection === 'scissors' || 
    playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
}


function playGame() {
    moves = 0; 

    const movesLeft = document.querySelector('.moves');
    movesLeft.textContent = `Moves Left: ${5 - moves}`;

    rockBtn.addEventListener('click', function () {
        handlePlayerChoice('rock');
    });

    paperBtn.addEventListener('click', function () {
        handlePlayerChoice('paper');
    });

    scissorsBtn.addEventListener('click', function () {
        handlePlayerChoice('scissors');
    });
}

function handlePlayerChoice(choice) {
    if (moves < 5) {
        moves++;
        const movesLeft = document.querySelector('.moves');
        movesLeft.textContent = `Moves Left: ${5 - moves}`;
        
        const computerSelection = getComputerChoice();
        playRound(choice, computerSelection);

        if (moves === 5) {
            if (playerScore > computerScore) {
                result.textContent = 'You win!';
            } else if (playerScore < computerScore) {
                result.textContent = 'You lose!';
            } else {
                result.textContent = "It's a tie!";
            }
            playerScoreBoard.textContent = playerScore;
            computerScoreBoard.textContent = computerScore;
        }
    }
}

playGame();
