const level13 =
`**********************A*K*A*K*A*K*A*K*A**SLLLLLLLLLLLLLLLL.***OOOOOOOOOOOOOOOO.**..AAAR.R.R.R.R.*N.**.O***OOOOOOOOO.**A**..*K*.LL.......*.M**O.*K*.OOOOOOOOO**A**..*K*......RRR.*N.**.O*K*OOOOOOOOO.**A**.T*..LLLLLLLLLL*.M*****.OOOOOOOOOOO**A**.M................*********************`;


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===13 && demarrer13 === true) {
        demarrer13 = false
        explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level13'; 
       
        for (let i = 0; i < level13.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level13[i] === '*') {
                tiles.className = 'tile wall';
            } else if (level13[i] === '.') {
                tiles.className = 'tile path';
            } else if (level13[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level13[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if(level13[i]==='A'){
                tiles.className='tile altın';
            }else if(level13[i]==='K'){
                tiles.className='tile kalp';
            }else if(level13[i]==='R'){
                tiles.className='tile sağyabaniçiçek';
            }else if(level13[i]==='L'){
                tiles.className='tile solyabaniçiçek';
            }else if(level13[i]==='Y'){
                tiles.className='tile yabaniçiçek';
            }else if(level13[i]==='O'){
                tiles.className='tile saksı';
            }else if(level13[i]==='N'){
                tiles.className='tile dikenlikaplumbağa';
            }else if(level13[i]==='M'){
                tiles.className='tile dikenlikaplumbağasağ';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(42)").appendChild(balle);
let posX = 42;
gamepad13=true;
let f=0
let g=1;
let y=0;
let ölüm13=0;
document.body.addEventListener("keydown", function (e) {
    if(levelkontrol==13&&ölüm13==0){
        f++;
        if (f%2==0) {
        document.querySelector("main > div:nth-child(" + (98) + ")").classList.add('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (99) + ")").classList.remove('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (139) + ")").classList.add('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (138) + ")").classList.remove('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (178) + ")").classList.add('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (179) + ")").classList.remove('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (219) + ")").classList.add('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (218) + ")").classList.remove('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (83) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (122) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (163) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (88) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (90) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (92) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (94) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (87) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (89) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (91) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (93) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (95) + ")").classList.add('sağyabaniçiçek');
        }else if (f%2==1) {
        document.querySelector("main > div:nth-child(" + (99) + ")").classList.add('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (98) + ")").classList.remove('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (138) + ")").classList.add('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (139) + ")").classList.remove('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (179) + ")").classList.add('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (178) + ")").classList.remove('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (218) + ")").classList.add('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (219) + ")").classList.remove('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (83) + ")").classList.add('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (122) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (163) + ")").classList.add('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (88) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (90) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (92) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (94) + ")").classList.add('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (87) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (89) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (91) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (93) + ")").classList.remove('sağyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (95) + ")").classList.remove('sağyabaniçiçek');
            }
    if(g<17){
        document.querySelector("main > div:nth-child(" + (242) + ")").classList.remove('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (242+g) + ")").classList.remove('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (243+g) + ")").classList.add('dikenlikaplumbağasağ');
        g++;
    }else if(g>=17){
        document.querySelector("main > div:nth-child(" + (259) + ")").classList.remove('dikenlikaplumbağasağ');
        document.querySelector("main > div:nth-child(" + (276-g) + ")").classList.remove('dikenlikaplumbağa');
        document.querySelector("main > div:nth-child(" + (275-g) + ")").classList.add('dikenlikaplumbağa');
        g++;
        if(g>33){
            g=0;
        }
    }
    if(y==10){
        y=0;
        document.querySelector("main > div:nth-child(" + (206) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (216) + ")").classList.add('solyabaniçiçek');
    }else if(y<10){
        document.querySelector("main > div:nth-child(" + (207+y) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (206+y) + ")").classList.add('solyabaniçiçek');
y++;
    }
    if(f%7==0){
        document.querySelector("main > div:nth-child(" + (132) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (128) + ")").classList.add('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (129) + ")").classList.add('solyabaniçiçek');
        }else if(f%7==1){
            document.querySelector("main > div:nth-child(" + (128) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (129) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (135) + ")").classList.add('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (136) + ")").classList.add('solyabaniçiçek');
        }else if(f%7==2){
            document.querySelector("main > div:nth-child(" + (135) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (136) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (129) + ")").classList.add('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (130) + ")").classList.add('solyabaniçiçek');
        }else if(f%7==3){
            document.querySelector("main > div:nth-child(" + (129) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (130) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (134) + ")").classList.add('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (135) + ")").classList.add('solyabaniçiçek');
        }else if(f%7==4){
            document.querySelector("main > div:nth-child(" + (134) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (135) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (130) + ")").classList.add('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (131) + ")").classList.add('solyabaniçiçek');
         }else if(f%7==5){
            document.querySelector("main > div:nth-child(" + (130) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (131) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (133) + ")").classList.add('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (134) + ")").classList.add('solyabaniçiçek');
        }else if(f%7==6){
            document.querySelector("main > div:nth-child(" + (133) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (134) + ")").classList.remove('solyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (132) + ")").classList.add('solyabaniçiçek');
         }
         if(f%4==0){
            document.querySelector("main > div:nth-child(" + (168) + ")").classList.remove('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (170) + ")").classList.remove('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (172) + ")").classList.remove('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (175) + ")").classList.add('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (173) + ")").classList.add('sağyabaniçiçek');
            }
            if(f%4==1){
            document.querySelector("main > div:nth-child(" + (173) + ")").classList.remove('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (174) + ")").classList.remove('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (175) + ")").classList.remove('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (172) + ")").classList.add('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (171) + ")").classList.add('sağyabaniçiçek');
            document.querySelector("main > div:nth-child(" + (170) + ")").classList.add('sağyabaniçiçek');
            }if(f%4==2){
                document.querySelector("main > div:nth-child(" + (172) + ")").classList.remove('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (171) + ")").classList.remove('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (170) + ")").classList.remove('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (169) + ")").classList.add('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (168) + ")").classList.add('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (167) + ")").classList.add('sağyabaniçiçek');
            }if(f%4==3){
                document.querySelector("main > div:nth-child(" + (169) + ")").classList.remove('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (167) + ")").classList.remove('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (170) + ")").classList.add('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (172) + ")").classList.add('sağyabaniçiçek');
                document.querySelector("main > div:nth-child(" + (174) + ")").classList.add('sağyabaniçiçek');
            }
            console.log(f%25)
        if(f%25==0){
        document.querySelector("main > div:nth-child(" + (58) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==1){
        document.querySelector("main > div:nth-child(" + (43) + ")").classList.remove('solyabaniçiçek');
        }else if(f%25==2){
        document.querySelector("main > div:nth-child(" + (44) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (43) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==3){
        document.querySelector("main > div:nth-child(" + (45) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (44) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==4){
        document.querySelector("main > div:nth-child(" + (45) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==5){
        document.querySelector("main > div:nth-child(" + (45) + ")").classList.remove('solyabaniçiçek');
        }else if(f%25>=6&&f%25<=9){
        document.querySelector("main > div:nth-child(" + (40+f%25) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (39+f%25) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==10){
        document.querySelector("main > div:nth-child(" + (49) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==11){
        document.querySelector("main > div:nth-child(" + (49) + ")").classList.remove('solyabaniçiçek');
        }else if(f%25>=12&&f%25<=15){
        document.querySelector("main > div:nth-child(" + (38+f%25) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (37+f%25) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==16){
        document.querySelector("main > div:nth-child(" + (53) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==17){
        document.querySelector("main > div:nth-child(" + (53) + ")").classList.remove('solyabaniçiçek');
        }else if(f%25>=18&&f%25<=21){
        document.querySelector("main > div:nth-child(" + (36+f%25) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (35+f%25) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==22){
        document.querySelector("main > div:nth-child(" + (57) + ")").classList.add('solyabaniçiçek');
        }else if(f%25==23){
        document.querySelector("main > div:nth-child(" + (57) + ")").classList.remove('solyabaniçiçek');
        }else if(f%25==24){
        document.querySelector("main > div:nth-child(" + (58) + ")").classList.remove('solyabaniçiçek');
        document.querySelector("main > div:nth-child(" + (57) + ")").classList.add('solyabaniçiçek');
        }

           
    if (e.key === "ArrowRight" && gamepad13 === true || e.key === 'd' && gamepad13 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
           
            
        }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('saksı')) {
           
            
        }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
            posX = 22
          gamepad13 = false
            levelkontrol=14;
            demarrer14=true
            ölüm13=1;
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('altın')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                altın++;
                
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
                if(altın==10){
                    altın=0;
                    can++;
                  }
                explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
  
            }
            else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('kalp')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                
                can++;
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('sağyabaniçiçek')) {
            
                    can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==13){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm13=1;
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                       }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('solyabaniçiçek')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('dikenlikaplumbağa')) {
                            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}else if (document.querySelector("main > div:nth-child(" + (posX) + ")").classList.contains('dikenlikaplumbağa')) {
                            posX-=1;
                            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                            can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }
                            }
                else {
            posX++
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    
    } else if (e.code === "ArrowLeft" && gamepad13 === true || e.key === 'a' && gamepad13 === true) {
        balle.classList.remove('player');
        balle.classList.add('playersol');
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            
        }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('saksı')) {
           
            
        }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('altın')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('kalp')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('sağyabaniçiçek')) {
            
                can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==13){
                    const p = document.createElement('p')
                    ölüm13=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                posX = 225
                gamepad13=false
                 demarrer13 = false
                 gamepad12=true;
                levelkontrol=12;
                demarrer12=true
                can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('solyabaniçiçek')) {
            
                    can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==13){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm13=1;
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                    posX = 225
                    gamepad13=false
                     demarrer13 = false
                     gamepad12=true;
                    levelkontrol=12;
                    demarrer12=true
                    can=3;
                       }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('dikenlikaplumbağa')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}else if (document.querySelector("main > div:nth-child(" + (posX) + ")").classList.contains('dikenlikaplumbağasağ')) {
                            posX+=1;
                            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                            can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }
                            }
            else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad13 === true || e.key === 'w' && gamepad13 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('wall')) {
          
        }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('saksı')) {
           
            
        }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('altın')) {
            posX-=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('kalp')) {
            posX-=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('sağyabaniçiçek')) {
            
                can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==13){
                    const p = document.createElement('p')
                    ölüm13=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                posX = 225
                gamepad13=false
                 demarrer13 = false
                 gamepad12=true;
                levelkontrol=12;
                demarrer12=true
                can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('solyabaniçiçek')) {
            
                    can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==13){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm13=1;
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                    posX = 225
                    gamepad13=false
                     demarrer13 = false
                     gamepad12=true;
                    levelkontrol=12;
                    demarrer12=true
                    can=3;
                       }}else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('dikenlikaplumbağa')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}else if (document.querySelector("main > div:nth-child(" + (posX - 20) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}
             else {
            posX -= 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad13 === true || e.key === 's' && gamepad13 === true) {
        if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('wall')) {
            
        }else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('saksı')) {
           
            
        } else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('altın')) {
            posX+=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }
        else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('kalp')) {
            posX+=20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            } else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('sağyabaniçiçek')) {
            
                can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                if(can==0&&levelkontrol==13){
                    const p = document.createElement('p')
                    ölüm13=1;
                    main.appendChild(p)
                p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                p.className = 'leveltolevel'
                posX = 225
                gamepad13=false
                 demarrer13 = false
                 gamepad12=true;
                levelkontrol=12;
                demarrer12=true
                can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('solyabaniçiçek')) {
            
                    can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                    if(can==0&&levelkontrol==13){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm13=1;
                    p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                    p.className = 'leveltolevel'
                    posX = 225
                    gamepad13=false
                     demarrer13 = false
                     gamepad12=true;
                    levelkontrol=12;
                    demarrer12=true
                    can=3;
                       }}else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('dikenlikaplumbağa')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}else if (document.querySelector("main > div:nth-child(" + (posX + 20) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
                        can--;explanations.innerHTML = 'Mantara ulaşmak için zamanlamanı doğru ayarlamalısın!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                        if(can==0&&levelkontrol==13){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm13=1;
                        p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
                        p.className = 'leveltolevel'
                        posX = 225
                        gamepad13=false
                         demarrer13 = false
                         gamepad12=true;
                        levelkontrol=12;
                        demarrer12=true
                        can=3;
                           }}
            else {
            posX += 20
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }}
})
}
})