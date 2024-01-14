
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];


window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }var myAudio = document.getElementById("myAudio");
    var playButton = document.getElementById("playButton");
    playButton.classList.add("stopped");
    
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner
    if (you == opponent) {
        yourScore += 0;
        opponentScore += 0;
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = "Senin Skorun: "+yourScore;
    document.getElementById("opponent-score").innerText ="Rakibin Skoru: "+ opponentScore;
}function togglePlay() {
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