const level4 = `-----------********--*.AAAA.*--*.****.*--*.****.*--*.**...*--*.**.***--*T**..S*--********-----------`

let altın=0;
document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===4 && demarrer4 === true) {
        explanations.innerHTML = '10 altın toplayıp canını 1 arttırabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
        demarrer4 = false
        main.textContent = '' 
        main.className = 'level4'; 
        for (let i = 0; i < level4.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level4[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level4[i] === '.') {
                tiles.className = 'tile path';
            } else if (level4[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level4[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if (level4[i] === '-') {
                tiles.className = 'tile border';
            }
            else if(level4[i]==='A'){
                tiles.className='tile altın';
            }
        }
        const balle = document.createElement('div');
        balle.className = 'player';

        document.querySelector("main > div:nth-child(78)").appendChild(balle);

        let posX = 78;
        let gamepad4=true;
        document.body.addEventListener("keydown", function (e) {
            demarrer4 = false
            if (e.key === "ArrowRight" &&gamepad4===true || e.key === 'd'&&gamepad4===true) {
            yatay=10;

            setPlayerClassToRight(balle);
            if (!isWall(posX + 1) ) {
                posX++;
                movePlayerTo(posX, balle)
            }
                
            } else if (e.code === "ArrowLeft" &&gamepad4===true|| e.key === 'a'&&gamepad4===true) {
                setPlayerClassToLeft(balle);
                if (isAltın(posX-1)) {
                    posX--
                    movePlayerTo(posX, balle)
                    explanations.innerHTML = '10 altın toplayıp canını 1 arttırabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                    }    else if (!isWall(posX - 1) ) {
                    posX --;
                    movePlayerTo(posX, balle)
                 }
              
            } else if (e.code === "ArrowUp" &&gamepad4===true|| e.key === 'w'&&gamepad4===true) {
                if (!isWall(posX - yatay) ) {
                    posX -= yatay;
                    movePlayerTo(posX, balle)
                }
            
               
            } else if (e.code === "ArrowDown"&&gamepad4===true || e.key === 's'&&gamepad4===true) {
                if (document.querySelector("main>div:nth-child(" + (posX + yatay) + ")").classList.contains('treasure')) {
                    levelkontrol=5;
                    posX = 33  
                    gamepad4=false;
                    demarrer5=true;
                }else if (!isWall(posX + yatay) ) {
                    posX += yatay;
                    movePlayerTo(posX, balle)
                }
            }
        })
    }

})