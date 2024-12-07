// Load Chunky's Image
document.querySelector(".chunky-image").src = "chunky.png";

// Gameplay Logic
const resultDisplay = document.getElementById("result");

document.querySelectorAll(".choices button").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const chunkyChoice = getChunkyChoice();
    displayResult(userChoice, chunkyChoice);
  });
});

function getChunkyChoice() {
  // Chunky always "chooses" the winning move
  return "winning move"; 
}

function displayResult(userChoice, chunkyChoice) {
  // Overriding the logic to ensure user always loses
  let chunkyWinningMove;

  if (userChoice === "rock") chunkyWinningMove = "paper";
  else if (userChoice === "paper") chunkyWinningMove = "scissors";
  else if (userChoice === "scissors") chunkyWinningMove = "rock";

  resultDisplay.innerHTML = `
    You chose <strong>${userChoice}</strong>. Chunky chose <strong>${chunkyWinningMove}</strong>.
    <br><span>Chunky Wins!</span>
  `;
}
