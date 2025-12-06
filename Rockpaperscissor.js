let playerScore = 0;
let computerScore = 0;

const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const buttons = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("resetBtn");

// When a player clicks a button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice");
        playRound(playerChoice);
    });
});

// Reset button functionality
resetBtn.addEventListener("click", resetGame);

//results of each round

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === "player") {
        playerScore++;
        resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You WIN! 🎉`;
    } else if (winner === "computer") {
        computerScore++;
        resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You LOSE! 😞`;
    } else {
        resultText.textContent = `You both chose ${playerChoice}. It's a TIE!`;
    }

    updateScore();
}
//Computer choice generator
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
//Determine winner logic
function determineWinner(player, computer) {
    if (player === computer) return "tie";

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }
    return "computer";
}
//Function to update score display
function updateScore() {
    scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Reset game function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = "";
    updateScore();
}
