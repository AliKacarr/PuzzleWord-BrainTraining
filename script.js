var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollTop) {
        // Scroll down
        document.querySelector("footer").classList.add("hide-footer");
    } else {
        // Scroll up
        document.querySelector("footer").classList.remove("hide-footer");
    }

    lastScrollTop = scrollPosition;
});

document.addEventListener("DOMContentLoaded", function () {
    
var ikiKisilikLink = document.getElementById("iki-kisilik-link");
ikiKisilikLink.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["pong", "connect4", "xox","taskagitmakas"]);
});


         
var ikiKisilikLink2 = document.getElementById("iki-kisilik-link2");
ikiKisilikLink2.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["pong", "connect4", "xox","taskagitmakas"]);
});



var puzzlelink = document.getElementById("puzzle-link");
puzzlelink.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["matchcars", "puzzle", "slidepuzzle","supermario","sudoku"]);
});


var puzzlelink2 = document.getElementById("puzzle-link2");
puzzlelink2.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["matchcars", "puzzle", "slidepuzzle","supermario","sudoku"]);
});


var yılanlink = document.getElementById("yılan-link");
yılanlink.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["yilan", "yilan2"]);
});


var yılanlink2 = document.getElementById("yılan-link2");
yılanlink2.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["yilan", "yilan2"]);
});


var bloklink = document.getElementById("blok-link");
bloklink.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["2048", "breakout", "tetris","pong"]);
});


var bloklink2 = document.getElementById("blok-link2");
bloklink2.addEventListener("click", function (e) {
e.preventDefault(); 

loadGames(["2048", "breakout", "tetris","pong"]);
});

function loadGames(gameIds) {
    var tumOyunlar = document.querySelectorAll('.game');
    tumOyunlar.forEach(function (oyun) {
        oyun.style.display = gameIds.includes(oyun.id) ? "block" : "none";
    });
}

var anaSayfaLink = document.getElementById("anasayfa-link");

// Ana Sayfa linkine tıklandığında bu fonksiyonu çalıştır
anaSayfaLink.addEventListener("click", function (e) {
e.preventDefault();
loadAllGames();
});
function loadAllGames() {
    var tumOyunlar = document.querySelectorAll('.game');
    tumOyunlar.forEach(function (oyun) {
        oyun.style.display = "block";
    });
}

});