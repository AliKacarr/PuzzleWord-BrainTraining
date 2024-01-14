const level9 =
`*********************S*.*M........*....**.*.****.**.***.**.**...*.....*.*.*.Y*.**.***.*****.*.****.**..K*K*........*P..**.********.***.******...*...P*.*A*.*...****.*.****.*.*.*...**A*.*.*......*.*.*.**.*.*.*.****.***.*.**.*.*....*...*...*.**...****.*.***.***.**.....M*A*.*...*...*************.***.*A**Y....*.......K*.****..*.....*A*A***..T*********************`;

document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===9 && demarrer9 === true) {
        demarrer9 = false
        explanations.innerHTML = 'Teleportları kullanarak başka<br> bir teleporta ışınlanabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level9'; 
       
        for (let i = 0; i < level9.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level9[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level9[i] === '.') {
                tiles.className = 'tile path';
            } else if (level9[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level9[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if(level9[i] === 'K'){
                tiles.className = 'tile kalp';
            }else if(level9[i]==='A'){
                tiles.className='tile altın';
            }else if(level9[i]==='M'){
                tiles.className='tile maviportal';
            }else if(level9[i]==='Y'){
                tiles.className='tile yeşilportal';
            }else if(level9[i]==='P'){
                tiles.className='tile kırmızıportal';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(22)").appendChild(balle);
let posX = 22;
let gamepad9 = true 
document.body.addEventListener("keydown", function (e) {
    
        
   
    if (e.key === "ArrowRight" && gamepad9 === true || e.key === 'd' && gamepad9 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
         if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('kalp')) {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Teleportları kullanarak başka<br> bir teleporta ışınlanabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altın')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                altın++;
                
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
                if(altın==10){
                    altın=0;
                    can++;
                  }
          explanations.innerHTML = 'Teleportları kullanarak başka<br> bir teleporta ışınlanabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
  
            }else if (document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('maviportal')&&posX==267) {
            posX=25;
            }else if (document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('kırmızıportal')&&posX==149) {
                posX=116;
           }else if (document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('yeşilportal')&&posX==77) {
           posX=301;
                  }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
                    posX = 23
                    gamepad9 = false
                    levelkontrol=10;
                    demarrer10=true
                }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
         
                }
            else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    
    } else if (e.code === "ArrowLeft" && gamepad9 === true || e.key === 'a' && gamepad9 === true) {
        balle.classList.remove('player');
        balle.classList.add('playersol');
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('altın')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Teleportları kullanarak başka<br> bir teleporta ışınlanabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('maviportal')&&posX==26) {
            posX=268;
            }else if (document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('kırmızıportal')&&posX==117) {
                posX=150;
           }else if (document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('yeşilportal')&&posX==302) {
           posX=78;
                  }
                 else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            
                  }  
        else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad9 === true || e.key === 'w' && gamepad9 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('wall')) {
            
        } else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('altın')) {
            posX-=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Teleportları kullanarak başka<br> bir teleporta ışınlanabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        } else {
            posX -= 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad9 === true || e.key === 's' && gamepad9 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('wall')) {
            
        }  else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('altın')) {
            posX+=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Teleportları kullanarak başka<br> bir teleporta ışınlanabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('kalp')) {
            posX+=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Teleportları kullanarak başka<br> bir teleporta ışınlanabilirsin!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }
            else {
            posX += 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }
})
}
})