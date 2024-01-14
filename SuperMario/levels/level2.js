const level2 =
 '-------------------------**********************--*S...................*--********************.*--*....................*--*.********************--*...................T*--**********************-------------------------';



document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===2 && demarrer2 === true) {
        demarrer2 = false
        explanations.innerHTML = 'Canın biterse altın mantarı en son topladığın levelden başlarsın.<br>level: '+levelkontrol+'<br>Can: '+can;
        main.textContent = '' 
        main.className = 'level2'; 
       
        for (let i = 0; i < level2.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level2[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level2[i] === '.') {
                tiles.className = 'tile path';
            } else if (level2[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level2[i] === 'T') {
                tiles.className = 'tile altıntreasure';
            } else if (level2[i] === '-') {
                tiles.className = 'tile border';
            }
        }
        const balle = document.createElement('div');
        balle.className = 'player';
        document.querySelector("main > div:nth-child(51)").appendChild(balle);

        let posX = 51;
        let gamepad2 = true

        document.body.addEventListener("keydown", function (e) {
            let yatay=24;
            if (e.key === "ArrowRight" && gamepad2 || e.key === 'd' && gamepad2) {
                setPlayerClassToRight(balle);
                if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altıntreasure')) {
                    posX = 26;
                    demarrer3 = true;
                    gamepad2 = false;
                    levelkontrol = 3;
                } else if (!isWall(posX + 1) ) {
                    posX++;
                    movePlayerTo(posX, balle)
                }
              
            } else if (e.code === "ArrowLeft" && gamepad2  || e.key === 'a' && gamepad2) {
                setPlayerClassToLeft(balle);
                if (!isWall(posX - 1) ) {
                    posX --;
                    movePlayerTo(posX, balle)
                }
               
              
            } else if (e.code === "ArrowUp" && gamepad2 || e.key === 'w' && gamepad2 ) {
                if (!isWall(posX - yatay) ) {
                    posX -= yatay;
                    movePlayerTo(posX, balle)
                }
                
            } else if (e.code === "ArrowDown" && gamepad2 || e.key === 's' && gamepad2 ) {
                if (!isWall(posX + yatay)  ) {
                    posX += yatay;
                    movePlayerTo(posX, balle)
                }
            }
        })
    }
})