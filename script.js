const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let randomNum = choices[Math.floor(Math.random() * choices.length)];
    return randomNum;
}
const computerSelection = getComputerChoice();

function getPlayerChoice() {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    
    function onButtonClick() {
        return playRound(playerSelection, computerSelection);
    }
    
    rockBtn.addEventListener('click', onButtonClick);
    paperBtn.addEventListener('click', onButtonClick);
    scissorsBtn.addEventListener('click', onButtonClick);
}
const playerSelection = getPlayerChoice();

const div = document.createElement('div');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || 
    playerSelection === 'paper' && computerSelection === 'scissors' || 
    playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'scissors' && computerSelection === 'paper' || 
    playerSelection === 'rock' && computerSelection === 'paper') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return 'Please enter valid choice';
    }
}


function playGame() {
    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore) {
        return 'You win!';
    } else if(playerScore < computerScore) {
        return 'You lose!';
    } else {
        return "It's a tie!";
    }
}
playGame();
