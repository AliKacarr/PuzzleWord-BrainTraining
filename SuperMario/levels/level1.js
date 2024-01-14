const body = document.querySelector('body');
const main = document.createElement('main');
main.className = 'level1';
body.appendChild(main);
let levelkontrol=1;
let can=3;
const explanations = document.createElement('div');
explanations.className = 'explanations';
body.appendChild(explanations);
explanations.innerHTML = 'Prensesi Boss tan kurtarmak için güçlenmelisin!<br>Mantarlar seni güçlendirir.<br>level: '+levelkontrol+'<br>⬅ Müzik'+'<br>Can:'+can;
let demarrer2 = true 
let demarrer3 = true 
let demarrer4 = true 
let demarrer5=true;
let demarrer6=true;
let demarrer7=true;
let demarrer8=true;
let demarrer9=true;
let demarrer10=true;
let demarrer11=true;
let demarrer12=true;
let demarrer13=true;
let demarrer14=true;
let demarrer15 = true;
let demarrer16=true;
const level1 =`**********************......****......****..**..****S.**..********..********..****......****T.....**********************`;
//-----------------------------------------------
function setPlayerClassToRight(balle) {
    balle.classList.remove('playersol');
    balle.classList.add('player');
}

function setPlayerClassToLeft(balle) {
    balle.classList.remove('player');
    balle.classList.add('playersol');
}
function movePlayerTo(posX, balle) {
    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle);
}
function isWall(position) {
    const targetTile = document.querySelector("main > div:nth-child(" + position + ")");
    return targetTile.classList.contains('wall');
}

function isBorder1() {
    const p = document.createElement('p')
    main.appendChild(p)
    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
    p.className = 'leveltolevel'
        posX = 26
        can=3;
        gamepad3=true;
        levelkontrol=3;
        demarrer3=true
}

function isKalp(position) {
    const targetTile = document.querySelector("main > div:nth-child(" + position + ")");
    if (targetTile.classList.contains('kalp')) {
        targetTile.classList.remove('kalp');
        can++;
        return true;console.log("aşağı")
    }
    return false;
}
function isAltın(position) {
    const targetTile = document.querySelector("main > div:nth-child(" + position + ")");
    if (targetTile.classList.contains('altın')) {
        targetTile.classList.remove('altın');
        altın++;
        if(altın==10){
            can++;
            altın=0;
        }
        return true;
    }
    return false;
}

//-----------------------------------------------
for (let i = 0; i < level1.length; i++) {
    const tiles = document.createElement('div');
    tiles.className = 'tile';
    main.appendChild(tiles);

    if (level1[i] === '*') {
        tiles.className = 'tile wall';
    } else if (level1[i] === '.') {
        tiles.className = 'tile path';
    } else if (level1[i] === 'S') {
        tiles.className = 'tile start';
    } else if (level1[i] === 'T') {
        tiles.className = 'tile treasure';
    } else if (level1[i] === '-') {
        tiles.className = 'tile border';
    }
}

const balle = document.createElement('div');
balle.className = 'player';
document.querySelector("main > div:nth-child(53)").appendChild(balle);

let posX = 53;
let gamepad = true
document.body.addEventListener("keydown", function (e) {
let yatay=10;
     
    if (e.key === "ArrowRight" && gamepad || e.key === 'd' && gamepad) {
        setPlayerClassToRight(balle);
        if (!isWall(posX + 1) ) {
            posX++;
            movePlayerTo(posX, balle)
        }
       
    } else if (e.code === "ArrowLeft" && gamepad || e.key === 'a' && gamepad ) {
        setPlayerClassToLeft(balle);
          if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('treasure')) {
            posX = 51;
            demarrer2 = true;
            gamepad = false;
            levelkontrol = 2;
        } else if (!isWall(posX - 1) ) {
            posX --;
            movePlayerTo(posX, balle)
        }
       
    } else if (e.code === "ArrowUp" && gamepad || e.key === 'w' && gamepad ) {
        if (!isWall(posX - yatay)  ) {
            posX -= yatay;
            movePlayerTo(posX, balle)
        }
        
    } else if (e.code === "ArrowDown" && gamepad || e.key === 's' && gamepad ) {
         if (document.querySelector("main > div:nth-child(" + (posX + yatay) + ")").classList.contains('treasure')) {
            posX = 51;
            demarrer2 = true;
            gamepad = false;
            levelkontrol = 2;
        }else if (!isWall(posX + yatay)  ) {
            posX += yatay;
            movePlayerTo(posX, balle)
        }
    }
})