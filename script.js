const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
    const computerSelection = computerChoice();
    const resultElement = document.getElementById("result");

    if (playerChoice === computerSelection) {
        resultElement.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerSelection === "scissors") ||
        (playerChoice === "paper" && computerSelection === "rock") ||
        (playerChoice === "scissors" && computerSelection === "paper")
    ) {
        resultElement.textContent = "You win!";
    } else {
        resultElement.textContent = "Computer wins!";
    }
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));
