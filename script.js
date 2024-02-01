const choice = ['rock', 'paper', 'scissors']; 
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

//computer play function
function getComputerChoice() {
    const randomNum = choice[Math.floor(Math.random() * choice.length)];
}

// player choice
function getPlayerChoice() {
    const playerChoice = prompt('Enter choice: ').toLowerCase;

    if(!(choice.includes(playerSelection))) {
        console.warn("Enter correct value");
        return getPlayerChoice();
    }
}

// play function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' || 
    playerSelection === 'scissors' && computerSelection === "rock") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

// game score function
// function game() {
//     gameScore = 0;

//     for(let i = 0; i < 5; i++) {
//         getComputerChoice();
//         getPlayerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (playerScore > computerScore) {
//         console.log("You win!");
//     } else if (playerScore < computerScore) {
//         console.log("You lose!");
//     } else {
//         console.log("It's a draw!")
//     }
// }

// game()

// test line console.log(playRound(playerSelection, computerSelection));
