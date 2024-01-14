const level12 =
`*********************..................**...A....**....A...**..A...**..**...A..**.A....*....*....A.**....***.**.***....**...**...*K..A**...**..**..**K**.*A**..**.....*......*.T**.**..**A*.**K**..**..**...**A..K*...*....**...S***.**.***....**......*....*......**.A....**..**....A.**..A.....**.....A..**...A..........A...**..................*********************`;


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===12 && demarrer12 === true) {
        demarrer12 = false
        explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level12'; 
       
        for (let i = 0; i < level12.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level12[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level12[i] === '.') {
                tiles.className = 'tile path';
            } else if (level12[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level12[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if(level12[i]==='A'){
                tiles.className='tile altın';
            }else if(level12[i]==='K'){
                tiles.className='tile kalp';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(225)").appendChild(balle);
let posX = 225;
let gamepad12 = true 
document.body.addEventListener("keydown", function (e) {
   
           
    if (e.key === "ArrowRight" && gamepad12 === true || e.key === 'd' && gamepad12 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
           
            
        }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
            posX = 42
            gamepad12 = false
            levelkontrol=13;
            demarrer13=true
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altın')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                altın++;
                
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
                if(altın==10){
                    altın=0;
                    can++;
                  }
                explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
  
            }
            else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('kalp')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                
                can++;
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }
                else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    
    } else if (e.code === "ArrowLeft" && gamepad12 === true || e.key === 'a' && gamepad12 === true) {
        balle.classList.remove('player');
        balle.classList.add('playersol');
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            
        }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('altın')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('kalp')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }
            else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad12 === true || e.key === 'w' && gamepad12 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('wall')) {
          
        }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('altın')) {
            posX-=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('kalp')) {
            posX-=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }
             else {
            posX -= 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad12 === true || e.key === 's' && gamepad12 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('wall')) {
            
        } else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('altın')) {
            posX+=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('kalp')) {
            posX+=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Hayaletlerden kurtulmamız güzel oldu.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }
            else {
            posX += 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }
})
}
})