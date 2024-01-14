var myAudio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
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

const board = document.getElementById('game-board');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Oyun tahtasını oluştur
for (let i = 0; i < 9; i++) {
    const button = document.createElement('button');
    button.setAttribute('data-index', i);
    button.addEventListener('click', handleButtonClick);
    board.appendChild(button);
}

// Oyuncu tıklama işlemi
function handleButtonClick(event) {
    const index = event.target.getAttribute('data-index');

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

// Oyunun galibi kontrolü
function checkWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Yatay
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Dikey
        [0, 4, 8], [2, 4, 6]              // Çapraz
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            displayResult(`${currentPlayer} Kazandı!`);
            gameActive = false;
            showRestartButton();
            return;
        }
    }

    if (!gameBoard.includes('')) {
        displayResult('Berabere!');
        gameActive = false;
        showRestartButton();
    }
}

// Oyuncu değiştirme
function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Sonucu ekrana yazdırma
function displayResult(message) {
    resultElement.textContent = message;
}

// Yeniden başlatma
function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    resultElement.textContent = '';
    hideRestartButton();
    const buttons = document.querySelectorAll('.board button');
    buttons.forEach(button => {
        button.textContent = '';
    });
}

// Yeniden oyna butonunu göster
function showRestartButton() {
    restartButton.style.display = 'block';
}

// Yeniden oyna butonunu gizle
function hideRestartButton() {
    restartButton.style.display = 'none';
}
