let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What do you choose? (rock, paper, scissors)");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You Won! Rock beats Scissors.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You won! Paper beats Rock";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  } else {
    computerScore++;
    return "Better luck next time!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}
