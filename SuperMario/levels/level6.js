const level6 =
`***********S......A*********.**A....A*.**.****.*.**.*T..A*.**.******.**A......A***********`;


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===6 && demarrer6 === true) {
        demarrer6 = false
        explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level6'; 
       
        for (let i = 0; i < level6.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level6[i] === '*') {
                tiles.className = 'tile border';
            } else if (level6[i] === '.') {
                tiles.className = 'tile path';
            } else if (level6[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level6[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if (level6[i] === '-') {
                tiles.className = 'tile border';
            }else if(level6[i]==='A'){
                tiles.className='tile altın';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(12)").appendChild(balle);
let posX = 12;
let gamepad6 = true 
document.body.addEventListener("keydown", function (e) {
    let yatay=10;
           
    if (e.key === "ArrowRight" && gamepad6 === true || e.key === 'd' && gamepad6 === true) {
        
        setPlayerClassToRight(balle);
        if (isKalp(posX+1)) {
            posX++
            movePlayerTo(posX, balle)
             explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else     if (isAltın(posX+1)) {
                posX++
                movePlayerTo(posX, balle)
                 explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }        
               else if(document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('border')){
            can--;explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==6){
            isBorder1();
            demarrer6=false
            gamepad6 = false
            }
        }  else  {
                    posX++;
                    movePlayerTo(posX, balle)
                }
    }
           else if (e.code === "ArrowLeft" && gamepad6 === true || e.key === 'a' && gamepad6 === true) {
            setPlayerClassToLeft(balle);
            if (isKalp(posX-1)) {
                posX--
                movePlayerTo(posX, balle)
                 explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('treasure')) {
                    posX = 92
                    gamepad6 = false
                    levelkontrol=7;
                    demarrer7=true
                } else if (isAltın(posX-1)) {
                    posX--
                    movePlayerTo(posX, balle)
                     explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    }        
                    else if(document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')){
                        can--;explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==6){
                        isBorder1();
                        demarrer6=false
                        gamepad6 = false
                        }} else {
                        posX--
                        movePlayerTo(posX, balle)
                    }
        
    } else if (e.code === "ArrowUp" && gamepad6 === true || e.key === 'w' && gamepad6 === true) {
        if (isKalp(posX-yatay)) {
            posX-=yatay
            movePlayerTo(posX, balle)
             explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else     if (isAltın(posX-yatay)) {
                posX-=yatay
                movePlayerTo(posX, balle)
                 explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }        
                else if(document.querySelector("main > div:nth-child(" + (posX - yatay) + ")").classList.contains('border')){
                    can--;explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==6){
                    isBorder1();
                    demarrer6=false
                    gamepad6 = false
                    }
                }  else {
                    posX-=yatay
                    movePlayerTo(posX, balle)
                }
    }else if (e.code === "ArrowDown" && gamepad6 === true || e.key === 's' && gamepad6 === true) {
        if (isKalp(posX+yatay)) {
            posX+=yatay;
            movePlayerTo(posX, balle)
             explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else     if (isAltın(posX+yatay)) {
                posX+=yatay;
                movePlayerTo(posX, balle)
                 explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }        
             else if(document.querySelector("main > div:nth-child(" + (posX + yatay) + ")").classList.contains('border')){
            can--;explanations.innerHTML = 'Tuşlara her zaman basılı tutma!<br>Dikene değersen canın hızla biter.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==6){
            isBorder1();
            demarrer6=false
            gamepad6 = false
            }
        }   else  {
                    posX+=yatay;
                    movePlayerTo(posX, balle)
                }
    }
})
}
})

