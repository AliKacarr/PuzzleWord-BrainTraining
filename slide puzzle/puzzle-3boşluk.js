var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

var imgOrder = ["7", "6", "3", "5", "1", "8", "4", "9", "2"];

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
    otherTile = this;
}

function isPuzzleCompleted() {
    let boardImages = document.getElementById("board").getElementsByTagName("img");

    for (let i = 0; i < boardImages.length; i++) {
        let tileNumber = parseInt(boardImages[i].src.split("/").pop().split(".")[0]);

        if (tileNumber !== i + 1) {
            return false;
        }
    }

    return true;
}

function dragEnd() {
    if (!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c - 1;
    let moveRight = r == r2 && c2 == c + 1;
    let moveUp = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;

        if (isPuzzleCompleted()) {
            document.getElementById("win-message").style.display = "block";
        }
    }
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