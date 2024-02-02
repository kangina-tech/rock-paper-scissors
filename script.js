const choices = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.querySelector('result');

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
    } else if (playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissors' && computerSelection === 'paper' || 
    playerSelection === 'rock' && computerSelection === 'paper') {
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result.textContent = 'Please enter valid choice';
    }
}


function playGame() {
    playerScore = 0;
    computerScore = 0;
    moves = 0;
    
    playerSelection.forEach(option => {
        option.addEventListener('click', function () {
            const moves = document.querySelector('.moves');
            moves++;
            moves.innerText = `Moves Left: ${5 - moves}`;

            const computerSelection = getComputerChoice();
            const playerSelection = [rockBtn, paperBtn, scissorsBtn];

            winner(this.innerText, computerSelection)

            if(moves == 5) {
                gameOver(playerSelection, moves);
            }
        })
    })
    
    const playerScoreBoard = document.querySelector('playerScore');
    const computerScoreBoard = document.querySelector('computerScore');
    playerScore = playerScore.toLowerCase();
    computerScore = computerScore.toLowerCase();

    if(playerScore > computerScore) {
        result.textContent = 'You win!';
        playerScoreBoard.textContent = playerScore;
    } else if(playerScore < computerScore) {
        result.textContent = 'You lose!';
        computerScoreBoard.textContent = computerScore;
    } else {
        result.textContent = "It's a tie!";
    }
}
playGame();
