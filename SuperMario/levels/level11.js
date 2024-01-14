const level11 =
`********************S.A.A.A.A.A.A.A.A***.*.*.*.*.*.*.*.****.A.A.A.A.A.A.A.***A.*.*.*.*.*.*.*.A***.A.A.A.A.A.A.A.****.*.*.*.*.*.*.*.****.A.A.A.A.A.A.A.***A.*.*.*.*.*.*.*.A***.A.A.A.A.A.A.A.****.*.*.*.*.*.*.*.****.A.A.A.A.A.A.A.***A.*.*.*.*.*.*.*.A***.A.A.A.A.A.A.A.****.*.*.*.*.*.*.*.***A.A...A...A...A.T******A***A***A************************`;


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===11 && demarrer11 === true) {
        demarrer11 = false
        explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level11'; 
       
        for (let i = 0; i < level11.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level11[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level11[i] === '.') {
                tiles.className = 'tile path';
            } else if (level11[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level11[i] === 'T') {
                tiles.className = 'tile altıntreasure';
            }else if(level11[i]==='A'){
                tiles.className='tile altın';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(21)").appendChild(balle);
let posX = 21;
let gamepad11 = true 
let k=0
let l=0;
let m=0;
let n=0;
let ölüm11=0;
document.body.addEventListener("keydown", function (e) {
    if(levelkontrol==11&&ölüm11==0){
        l = Math.floor(Math.random() * 8);
        n = Math.floor(Math.random() * 8);
        for(let i=0;i<15;i++) {
        document.querySelector("main > div:nth-child(" + (22+38*k+i) + ")").classList.remove('hayaletsağ');
        document.querySelector("main > div:nth-child(" + (22+19*i+2*m) + ")").classList.remove('hayaletsol');
        
        }for (let i=0;i<15;i++) {
            document.querySelector("main > div:nth-child(" + (22+38*l+i) + ")").classList.add('hayaletsağ');
            document.querySelector("main > div:nth-child(" + (22+19*i+2*n) + ")").classList.add('hayaletsol');
            k=l;
            m=n;
            }
    }
           
    if (e.key === "ArrowRight" && gamepad11 === true || e.key === 'd' && gamepad11 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
           
            
        }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altıntreasure')) {
            posX = 225
            gamepad11 = false
            levelkontrol=12;
            demarrer12=true
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altın')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                altın++;
                
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
                if(altın==10){
                    altın=0;
                    can++;
                  }
                explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
  
            }
            else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('hayaletsağ')) {
            
                    can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==11){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm11=1;
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 22
                        demarrer11=false
                         gamepad11 = false
                         gamepad9=true;
                        levelkontrol=9;
                        demarrer9=true
                        can=3;
                       }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('hayaletsol')) {
            
                        can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==11){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm11=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                            posX = 22
                            demarrer11=false
                             gamepad11 = false
                             gamepad9=true;
                            levelkontrol=9;
                            demarrer9=true
                            can=3;
                           }}
                else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    
    } else if (e.code === "ArrowLeft" && gamepad11 === true || e.key === 'a' && gamepad11 === true) {
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
            explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('hayaletsağ')) {
            
                can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==11){
                    const p = document.createElement('p')
                    ölüm11=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 22
                    demarrer11=false
                     gamepad11 = false
                     gamepad9=true;
                    levelkontrol=9;
                    demarrer9=true
                    can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('hayaletsol')) {
            
                    can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==11){
                        const p = document.createElement('p')
                        ölüm11=1;
                        main.appendChild(p)
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 22
                        demarrer11=false
                         gamepad11 = false
                         gamepad9=true;
                        levelkontrol=9;
                        demarrer9=true
                        can=3;
                       }}
            else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad11 === true || e.key === 'w' && gamepad11 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('wall')) {
          
        }else if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('altın')) {
            posX-=19
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('hayaletsağ')) {
            
                can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==11){
                    const p = document.createElement('p')
                    ölüm11=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 22
                    demarrer11=false
                     gamepad11 = false
                     gamepad9=true;
                    levelkontrol=9;
                    demarrer9=true
                    can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('hayaletsol')) {
            
                    can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==11){
                        const p = document.createElement('p')
                        ölüm11=1;
                        main.appendChild(p)
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 22
                        demarrer11=false
                         gamepad11 = false
                         gamepad9=true;
                        levelkontrol=9;
                        demarrer9=true
                        can=3;
                       }}
             else {
            posX -= 19
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad11 === true || e.key === 's' && gamepad11 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('wall')) {
            
        } else if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('altın')) {
            posX+=19
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('hayaletsağ')) {
            
                can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==11){
                    const p = document.createElement('p')
                    ölüm11=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                    posX = 22
                    demarrer11=false
                     gamepad11 = false
                     gamepad9=true;
                    levelkontrol=9;
                    demarrer9=true
                    can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('hayaletsol')) {
            
                    can--;explanations.innerHTML = 'Şu hayaletlerin nerede<br>ortaya çıkacakları <br>hiç belli olmuyor.<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==11){
                        const p = document.createElement('p')
                        ölüm11=1;
                        main.appendChild(p)
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 22
                        demarrer11=false
                         gamepad11 = false
                         gamepad9=true;
                        levelkontrol=9;
                        demarrer9=true
                        can=3;
                       }}
            else {
            posX += 19
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }
})
}
})