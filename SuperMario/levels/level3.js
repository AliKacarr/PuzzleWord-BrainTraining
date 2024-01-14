const level3 = `-----------********--****S***--****.***--****.***--****.***--*......*--*.****.*--*..***.*--*..***K*--**.*****--*T.*****--********-----------`



document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===3 && demarrer3 === true) {
        explanations.innerHTML = 'Kalp toplayarak canını arttırabilirsin!<br>Ölürsen bu bölümden<br> yeniden başlarsın!<br>Level: '+levelkontrol+'<br>Can: '+can;
        demarrer3 = false
        main.textContent = '' 
        main.className = 'level3'; 
        for (let i = 0; i < level3.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level3[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level3[i] === '.') {
                tiles.className = 'tile path';
            } else if (level3[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level3[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if (level3[i] === '-') {
                tiles.className = 'tile border';
            }
            else if(level3[i] === 'K'){
                tiles.className = 'tile kalp';
            }
        }
        const balle = document.createElement('div');
        balle.className = 'player';

        document.querySelector("main > div:nth-child(26)").appendChild(balle);

        let posX = 26;
        let gamepad3=true;
        document.body.addEventListener("keydown", function (e) {
            yatay=10;
            if (e.key === "ArrowRight" &&gamepad3===true || e.key === 'd'&&gamepad3===true) {
                 setPlayerClassToRight(balle);
                if (!isWall(posX + 1) ) {
                     posX++;
                     movePlayerTo(posX, balle)
                 }
                
            } else if (e.code === "ArrowLeft" &&gamepad3===true|| e.key === 'a'&&gamepad3===true) {
                setPlayerClassToLeft(balle);
                 if (document.querySelector("main>div:nth-child(" + (posX - 1) + ")").classList.contains('treasure')) {
                    levelkontrol=4;
                    posX = 78  
                    demarrer4=true
                    gamepad3=false;
                }else if (!isWall(posX - 1) ) {
                    posX --;
                    movePlayerTo(posX, balle)
                 }
                
            } else if (e.code === "ArrowUp" &&gamepad3===true|| e.key === 'w'&&gamepad3===true) {
                if (!isWall(posX - yatay) ) {
                    posX -= yatay;
                    movePlayerTo(posX, balle)
                }
               
            } else if (e.code === "ArrowDown"&&gamepad3===true || e.key === 's'&&gamepad3===true) {
                if (isKalp(posX+yatay)) {
                    posX+=yatay
                    movePlayerTo(posX, balle)
                    explanations.innerHTML = 'Kalp toplayarak canını arttırabilirsin!<br>Ölürsen bu bölümden<br> yeniden başlarsın!<br>Level: '+levelkontrol+'<br>Can: '+can;
                    }else if (!isWall(posX + yatay) ) {
                    posX += yatay;
                    movePlayerTo(posX, balle)
                }
            }
        })
    }

})  
