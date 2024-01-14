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