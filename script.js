console.log("hello World!")

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    cpuChoice = getRandomNumber();
    if (cpuChoice === 1) {
        return 'rock';
    } else if (cpuChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (playerChoice === 'rock') {
        return 'Rock';
    } else if (playerChoice === 'paper') {
        return 'Paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log('Tie game! Try again.');
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        console.log('You win! Paper beats Rock');
        ++humanScore;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('You lose! Rock beats scissors');
        ++computerScore;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('You lose! Paper beats Rock');
        ++computerScore;
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        console.log('You win! Scissors beat paper');
        ++humanScore;
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        console.log('You win! Rock beats scissors');
        ++humanScore;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('You lose! Scissors beat paper');
        ++computerScore;
    }
    return `You chose: ${humanChoice}. CPU chose: ${computerChoice}.
            \nYour Score: ${humanScore}, CPU Score: ${computerScore}`;
}