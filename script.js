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

function resetGame() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";

    // Enable the game buttons again
    const gameButtons = document.querySelectorAll("#game button");
    gameButtons.forEach(button => (button.disabled = false));
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));
document.getElementById("reset").addEventListener("click", resetGame);
