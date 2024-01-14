const level8 =
`**************************K..*.....*..........*A.**A*...***.*.*.******.**.**.*****..T*A*..*..D*..*.**....D*.******.*...*..*.**.....*........*.*.A*.*.*****..*****.****.****.*.**.K*........*.......*.*.**.***********.*****.*...**..........S*...*A*.***.**.***..**.*****...*.*...**.*C*..*A.*...***.*...****.*.**.****.*...*.*****C**...........*...........**************************`;


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===8 && demarrer8 === true) {
        demarrer8 = false
        explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level8'; 
       
        for (let i = 0; i < level8.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level8[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level8[i] === '.') {
                tiles.className = 'tile path';
            } else if (level8[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level8[i] === 'T') {
                tiles.className = 'tile altıntreasure';
            }else if(level8[i]==='A'){
                tiles.className='tile altın';
            }else if(level8[i]==='K'){
                tiles.className='tile kalp';
            }else if(level8[i]==='D'){
                tiles.className='tile tersdikenlikaplumbağa';
            }else if(level8[i]==='C'){
                tiles.className='tile tersyabaniçiçek';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(237)").appendChild(balle);
let posX = 237;
let gamepad8 = true 
document.body.addEventListener("keydown", function (e) {
    
           
    if (e.key === "ArrowRight" && gamepad8 === true || e.key === 'd' && gamepad8 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
         }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altıntreasure')) {
            posX = 22
            gamepad8 = false
            levelkontrol=9;
            demarrer9=true
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('kalp')) {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
              can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('tersyabaniçiçek')) {
            
                can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==8){
                    const p = document.createElement('p')
                main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 26
                    demarrer8=false
                     gamepad8 = false
                     gamepad3=true;
                    levelkontrol=3;
                    demarrer3=true
                    can=3;
                   }} else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
                    can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                     if(can==0&&levelkontrol==8){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 26
                        demarrer8=false
                         gamepad8 = false
                         gamepad3=true;
                        levelkontrol=3;
                        demarrer3=true
                        can=3;
                       }} else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altın')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                altın++;
                
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
                if(altın==10){
                    altın=0;
                    can++;
                  }
                explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
  
            }else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    
    } else if (e.code === "ArrowLeft" && gamepad8 === true || e.key === 'a' && gamepad8 === true) {
        balle.classList.remove('player');
        balle.classList.add('playersol');
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            
        }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('kalp')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
              can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('tersyabaniçiçek')) {
            
                can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==8){
                    const p = document.createElement('p')
                main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 26
                    demarrer8=false
                     gamepad8 = false
                     gamepad3=true;
                    levelkontrol=3;
                    demarrer3=true
                    can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
                    can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                     if(can==0&&levelkontrol==8){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 26
                        demarrer8=false
                         gamepad8 = false
                         gamepad3=true;
                        levelkontrol=3;
                        demarrer3=true
                        can=3;
                       }}  else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('altın')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad8 === true || e.key === 'w' && gamepad8 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 25) + ")").classList.contains('wall')) {
          
        }else if (document.querySelector("main > div:nth-child(" + (posX - 25) + ")").classList.contains('kalp')) {
            posX-=25
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
              can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX - 25) + ")").classList.contains('tersyabaniçiçek')) {
            
                can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==8){
                    const p = document.createElement('p')
                main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 26
                    demarrer8=false
                     gamepad8 = false
                     gamepad3=true;
                    levelkontrol=3;
                    demarrer3=true
                    can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX - 25) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
                    can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                     if(can==0&&levelkontrol==8){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 26
                        demarrer8=false
                         gamepad8 = false
                         gamepad3=true;
                        levelkontrol=3;
                        demarrer3=true
                        can=3;
                       }}   else if (document.querySelector("main > div:nth-child(" + (posX - 25) + ")").classList.contains('altın')) {
            posX-=25
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        } else {
            posX -= 25
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad8 === true || e.key === 's' && gamepad8 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 25) + ")").classList.contains('wall')) {
            
        }else if (document.querySelector("main > div:nth-child(" + (posX + 25) + ")").classList.contains('altıntreasure')) {
            posX = 22
            gamepad8 = false
            levelkontrol=9;
            demarrer9=true
        } else if (document.querySelector("main > div:nth-child(" + (posX + 25) + ")").classList.contains('kalp')) {
            posX+=25
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
              can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX + 25) + ")").classList.contains('tersyabaniçiçek')) {
            
                can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==8){
                    const p = document.createElement('p')
                main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 26
                    demarrer8=false
                     gamepad8 = false
                     gamepad3=true;
                    levelkontrol=3;
                    demarrer3=true
                    can=3;
                   }} else if (document.querySelector("main > div:nth-child(" + (posX + 25) + ")").classList.contains('tersdikenlikaplumbağa')) {
            
                    can--;explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                     if(can==0&&levelkontrol==8){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 26
                        demarrer8=false
                         gamepad8 = false
                         gamepad3=true;
                        levelkontrol=3;
                        demarrer3=true
                        can=3;
                       }}   else if (document.querySelector("main > div:nth-child(" + (posX + 25) + ")").classList.contains('altın')) {
            posX+=25
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Altın mantara ulaşmak için labirenti çözebilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else {
            posX += 25
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }
})
}
})