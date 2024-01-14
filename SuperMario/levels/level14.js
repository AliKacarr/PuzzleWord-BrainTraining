const level14 =
`*********************S........*........**.*****.****.*****.**.....*A.....*.....******.********.******.*..A*........*..K**.*.***.*.****.*.*.**.*.*...*A.......*.**.*.***.**********.**B..........*.*.*..**.*.******.**.*.*.***.*.*.......*.*....**.*.*.*******.*.*****...*.*...*.....*KK**.***.*.*.*.*.***KK**.................T*********************`;


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===14 && demarrer14 === true) {
        demarrer14 = false
        explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level14'; 
       
        for (let i = 0; i < level14.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level14[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level14[i] === '.') {
                tiles.className = 'tile path';
            } else if (level14[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level14[i] === 'T') {
                tiles.className = 'tile altıntreasure';
            } else if(level14[i]==='A'){
                tiles.className='tile altın';
            }else if(level14[i]==='K'){
                tiles.className='tile kalp';
            }else if(level14[i]==='B'){
                tiles.className='tile sağboss';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(22)").appendChild(balle);
let posX = 22;
let gamepad14 = true 
let x=0
let z=0;
let ölüm14=0;
document.body.addEventListener("keydown", function (e) {
    if(levelkontrol==14&&ölüm14==0){
        x++;
        if (x>0&&x<=18&&x%3==0) {
        document.querySelector("main > div:nth-child(" + (202+20*z) + ")").classList.add('sağboss');
        document.querySelector("main > div:nth-child(" + (182+20*z) + ")").classList.remove('sağboss');
        z++;
        }else if (x>18&&x<=66&&x%3==0) {
            document.querySelector("main > div:nth-child(" + (297+z) + ")").classList.add('sağboss');
            document.querySelector("main > div:nth-child(" + (296+z) + ")").classList.remove('sağboss');
            z++;
            }
    }
           
    if (e.key === "ArrowRight" && gamepad14 === true || e.key === 'd' && gamepad14 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
           
            
        }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altıntreasure')) {
            posX = 83
            gamepad14 = false
            levelkontrol=15;
            demarrer15=true
            ölüm14=1;
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altın')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                altın++;
                
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
                if(altın==10){
                    altın=0;
                    can++;
                  }
                explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
  
            }
            else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('kalp')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                
                can++;
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('sağboss')) {
            
                    can--;explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==14){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm14=1;
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 225
                        demarrer14=false
                         gamepad14 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                       }}
                else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    
    } else if (e.code === "ArrowLeft" && gamepad14 === true || e.key === 'a' && gamepad14 === true) {
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
            explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('kalp')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('sağboss')) {
            
                can--;explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==14){
                    const p = document.createElement('p')
                    ölüm14=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 225
                    demarrer14=false
                     gamepad14 = false
                     gamepad12=true;
                    levelkontrol=12;
                    demarrer12=true
                    can=3;
                   }}
            else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad14 === true || e.key === 'w' && gamepad14 === true) {
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
            explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('kalp')) {
            posX-=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('sağboss')) {
            
                can--;explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==14){
                    const p = document.createElement('p')
                    ölüm14=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 225
                    demarrer14=false
                     gamepad14 = false
                     gamepad12=true;
                    levelkontrol=12;
                    demarrer12=true
                    can=3;
                   }}
             else {
            posX -= 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad14 === true || e.key === 's' && gamepad14 === true) {
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
            explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('kalp')) {
            posX+=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('altıntreasure')) {
                posX = 83
                gamepad14 = false
                levelkontrol=15;
                demarrer15=true
                ölüm14=1;
            } else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('sağboss')) {
            
                can--;explanations.innerHTML = 'Boss tan önce mantara ulaşmalısın.<br>Doğru yolu bulabilecek misin?<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==14){
                    const p = document.createElement('p')
                    ölüm14=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 225
                    demarrer14=false
                     gamepad14 = false
                     gamepad12=true;
                    levelkontrol=12;
                    demarrer12=true
                    can=3;
                   }}
            else {
            posX += 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }
})
}
})