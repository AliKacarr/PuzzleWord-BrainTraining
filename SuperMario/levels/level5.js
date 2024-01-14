const level5 =
`----------------***********.*--*S.....**A*.T--*****....A*.*--*****.***A*.*--*****.*****.*--*****.*****.*--*****.......*--*****.*******---.........------.------AAA-----...K------------------------`;


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===5 && demarrer5 === true) {
        demarrer5 = false
        explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level5'; 
       
        for (let i = 0; i < level5.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level5[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level5[i] === '.') {
                tiles.className = 'tile path';
            } else if (level5[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level5[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if (level5[i] === '-') {
                tiles.className = 'tile border';
            }else if(level5[i] === 'K'){
                tiles.className = 'tile kalp';
            }else if(level5[i]==='A'){
                tiles.className='tile altın';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(33)").appendChild(balle);
let posX = 33;
let gamepad5 = true 
document.body.addEventListener("keydown", function (e) {
    let yatay=15;
    if (e.key === "ArrowRight" && gamepad5 === true || e.key === 'd' && gamepad5 === true) {
        setPlayerClassToRight(balle);
        if (isKalp(posX+1)) {
            posX++
            movePlayerTo(posX, balle)
            explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
                posX = 12
                 gamepad5 = false
                levelkontrol=6;
                demarrer6=true
            }
           else if (isAltın(posX+1)) {
        posX++
        movePlayerTo(posX, balle)
        explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        } else if(document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('border')){
            can--;explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==5){
            isBorder1();
            demarrer5=false
            gamepad5 = false
            }
        } else if (!isWall(posX + 1)) {
            posX++;
            movePlayerTo(posX, balle)
        }    
    } else if (e.code === "ArrowLeft" && gamepad5 === true || e.key === 'a' && gamepad5 === true) {
        setPlayerClassToLeft(balle);
        if (isKalp(posX-1)) {
            posX--
            movePlayerTo(posX, balle)
            explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }
         else if (isAltın(posX-1)) {
                posX-=1
                movePlayerTo(posX, balle)
                explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }   
           else if(document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')){
            can--;explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==5){
            isBorder1();
            demarrer5=false
            gamepad5 = false
            }
        } else if (!isWall(posX - 1) ) {
            posX --;
            movePlayerTo(posX, balle)
         }
    } else if (e.code === "ArrowUp" && gamepad5 === true || e.key === 'w' && gamepad5 === true) {
        if (isKalp(posX-yatay)) {
            posX-=yatay
            movePlayerTo(posX, balle)
            explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }
           else if (isAltın(posX-yatay)) {
                posX-=yatay
                movePlayerTo(posX, balle)
                explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }   
            else if(document.querySelector("main > div:nth-child(" + (posX - yatay) + ")").classList.contains('border')){
            can--;explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==5){
            isBorder1();
            demarrer5=false
            gamepad5 = false
            }
        }else if (!isWall(posX - yatay) ) {
            posX -= yatay;
            movePlayerTo(posX, balle)
        }
    } else if (e.code === "ArrowDown" && gamepad5 === true || e.key === 's' && gamepad5 === true) {
        if (isKalp(posX+ yatay)) {
            posX+= yatay;
            movePlayerTo(posX, balle)
            explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }
          else  if (isAltın(posX+ yatay)) {
        posX+= yatay;
        movePlayerTo(posX, balle)
        explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        } else if(document.querySelector("main > div:nth-child(" + (posX + yatay) + ")").classList.contains('border')){
            can--;explanations.innerHTML = 'Dikenlere dikkat et!<br>Canının azalmaması için dikkatli oyna.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==5){
            isBorder1();
            demarrer5=false
            gamepad5 = false
            }
        }else  if (!isWall(posX + yatay) ) {
            posX += yatay;
            movePlayerTo(posX, balle)
        }
    }
})
}
})

