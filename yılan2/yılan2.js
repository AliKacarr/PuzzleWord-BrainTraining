var blockSize = 25;
var rows = 22;
var cols = 22;
var board;
var context;

var colors = ["blue", "green", "red", "navy", "brown", "teal", "orange", "gray","blue","yellow","white","pink","purple","silver","violet"];

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;
var foodColor;

var gameOver = false;

window.onload = function () {
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d"); //used for drawing on the board

  document.getElementById("play-again-button").addEventListener("click", playAgain);

  placeFood();
  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 10); //100 milliseconds
};

function update() {
  if (gameOver) {
    return;
  }

  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = foodColor;
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    var newColor = colors[snakeBody.length % colors.length];
    snakeBody.push({
      x: foodX,
      y: foodY,
      color: newColor,
    });
    foodColor = newColor;
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = { x: snakeX, y: snakeY, color: foodColor };
  }

  for (let i = 0; i < snakeBody.length; i++) {
    context.fillStyle = snakeBody[i].color;
    context.fillRect(snakeBody[i].x, snakeBody[i].y, blockSize, blockSize);
  }

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  //game over conditions
  if (
    snakeX < 0 ||
    snakeX > cols * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
    document.getElementById("game-over-message").style.display = "block";
    document.getElementById("play-again-button").style.display = "block";
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i].x && snakeY == snakeBody[i].y) {
      gameOver = true;
      document.getElementById("game-over-message").style.display = "block";
      document.getElementById("play-again-button").style.display = "block";
    }
  }
}

function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
  foodColor = getRandomColor();
}

function getRandomColor() {
  var colors = [
    "blue",
    "green",
    "red",
    "navy",
    "brown",
    "teal",
    "orange",
    "gray",
    "blue","yellow","white","pink","purple","silver","violet",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function playAgain() {
  // Reset all game variables and elements
  document.getElementById("game-over-message").style.display = "none";
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  velocityX = 0;
  velocityY = 0;
  snakeBody = [];
  placeFood();
  gameOver = false;

  // Clear the board
  context.clearRect(0, 0, board.width, board.height);

  // Restart the game
  update();

  // Hide the "Play Again" button
  document.getElementById("play-again-button").style. Display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
  var playButton = document.getElementById("playButton");
  var myAudio = document.getElementById("myAudio");

  playButton.classList.add("stopped");

  function togglePlay() {
      if (myAudio.paused) {
          myAudio.play();
          playButton.innerHTML = "🎵";
          playButton.classList.remove("stopped");
      } else {
          myAudio.pause();
          playButton.innerHTML = "🎵";
          playButton.classList.add("stopped");
      }
  }

  playButton.addEventListener("click", togglePlay);
});