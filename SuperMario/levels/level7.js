const level7 =
`***********TÖ.....Ö**........**A*A*A*..**Y*Y*Y**.**O*O*O*A.**F*F*F**.**A*A*A*..**........**SD.....D***********`;

document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===7 && demarrer7 === true) {
        demarrer7 = false
        explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level7'; 
       
        for (let i = 0; i < level7.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level7[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level7[i] === '.') {
                tiles.className = 'tile path';
            } else if (level7[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level7[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if (level7[i] === '-') {
                tiles.className = 'tile border';
            }else if(level7[i]==='A'){
                tiles.className='tile altın';
            }else if(level7[i]==='Y'){
                tiles.className='tile yabaniçiçek';
            }else if(level7[i]==='F'){
                tiles.className='tile tersyabaniçiçek';
            }else if(level7[i]==='D'){
                tiles.className='tile dikenlikaplumbağa';
            }else if(level7[i]==='Ö'){
                tiles.className='tile tersdikenlikaplumbağa';
            }else if(level7[i]==='O'){
                tiles.className='tile toprak';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(92)").appendChild(balle);
let posX = 92;
let gamepad7 = true 
document.body.addEventListener("keydown", function (e) {
    
           
    if (e.key === "ArrowRight" && gamepad7 === true || e.key === 'd' && gamepad7 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
           
            
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('border')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
             if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('tersyabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altın')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                altın++;
                
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
                if(altın==10){
                    altın=0;
                    can++;
                  }
                explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
  
            }else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    
    } else if (e.code === "ArrowLeft" && gamepad7 === true || e.key === 'a' && gamepad7 === true) {
        balle.classList.remove('player');
        balle.classList.add('playersol');
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            
        } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('tersyabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               } } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('altın')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad7 === true || e.key === 'w' && gamepad7 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('wall')) {
          
        } else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('border')) {
           
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        }else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('tersyabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('treasure')) {
            posX = 237
            gamepad7 = false
            levelkontrol=8;
            demarrer8=true
        } else if (document.querySelector("main > div:nth-child(" + (posX - 10) + ")").classList.contains('altın')) {
            posX-=10
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        } else {
            posX -= 10
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad7 === true || e.key === 's' && gamepad7 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('wall')) {
            
        } else if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('border')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        }else if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}
               else if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
                can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==7){
                    const p = document.createElement('p')
                main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 26
                    demarrer7=false
                     gamepad7 = false
                     gamepad3=true;
                    levelkontrol=3;
                    demarrer3=true
                    can=3;
                   }}
               else if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               } } else if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('tersyabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==7){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 26
                demarrer7=false
                 gamepad7 = false
                 gamepad3=true;
                levelkontrol=3;
                demarrer3=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 10) + ")").classList.contains('altın')) {
            posX+=10
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else {
            posX += 10
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }
})
}
})