const board = document.getElementById('board');
const squares = document.querySelectorAll('.square');
const results = document.getElementById('results');

let currentPlayer = "X";
currentPlayer = currentPlayer === "X" ? "O" : "X";


squares.forEach(square => {
  const squareIndex = parseInt(square.id.replace("square", ""));
  square.addEventListener("click", () => {
    if (square.textContent === "") {
      square.textContent = currentPlayer;
      gameState[squareIndex] = currentPlayer; 

      checkWinOrDraw();
      
      
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});


let gameState = Array(9).fill(null)

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
];

function checkWinOrDraw() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i]; 
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      results.textContent = `${gameState[a]} wins!`;
      return; 
    }
  }

  const isBoardFull = gameState.every(square => square !== null);
  if (isBoardFull) {
    results.textContent = "It's a draw!";
  }
}

restartButton.addEventListener('click', () => {
  squares.forEach(square => square.textContent = ""); 
  gameState.fill(null);
  results.textContent = ""; 
  currentPlayer = "X";
});
