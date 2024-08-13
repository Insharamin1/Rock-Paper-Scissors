let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    resultDiv.textContent = result;
    scoreDiv.textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;

    if (humanScore === 5 || computerScore === 5) {
      const winner =
        humanScore === 5 ? "You win the game!" : "Computer wins the game!";
      resultDiv.textContent = winner;
      disableButtons();
    }
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You Won! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You Lost! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}.`;
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
