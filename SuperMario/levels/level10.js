const level10 =
`**********************S....AAAL*RA.AL*..T******.*******.***.****RA...*RAAA.*.......****.*******.*******.**B*.*K*.AL*.......*.**.*.*.*.*****.***.*.**...*B*.*.AL*...*.*.**.*****.*.*****.*.*.**......A*.*.....*.*.**.***.***.*.*****.*.**..G*.*A....*Ö*...*.****.*.*RR.LL*.*.***.**K*.*.***.***K*.*A*.**.*.*..*..*A***.*...**.*....*..*.......*.**G*YYY....*YYYYYYY*Ö**********************`;

document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===10 && demarrer10 === true) {
        demarrer10 = false
        explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        main.textContent = ''
        main.className = 'level10'; 
       
        for (let i = 0; i < level10.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

            if (level10[i] === '*') {
                tiles.className = 'tile border';
            } else if (level10[i] === '.') {
                tiles.className = 'tile path';
            } else if (level10[i] === 'S') {
                tiles.className = 'tile start';
            } else if (level10[i] === 'T') {
                tiles.className = 'tile treasure';
            } else if(level10[i]==='A'){
                tiles.className='tile altın';
            }else if(level10[i]==='Y'){
                tiles.className='tile yabaniçiçek';
            }else if(level10[i]==='R'){
                tiles.className='tile dikenlikaplumbağasağ';
            }else if(level10[i]==='L'){
                tiles.className='tile dikenlikaplumbağa';
            }else if(level10[i]==='O'){
                tiles.className='tile border';
            }else if(level10[i]==='Ö'){
                tiles.className='tile kırmızıportal';
            }else if(level10[i]==='G'){
                tiles.className='tile yeşilportal';
            }else if(level10[i]==='B'){
                tiles.className='tile maviportal';
            }else if(level10[i]==='K'){
                tiles.className='tile kalp';
            }
            
        }

const balle = document.createElement('div');
balle.className = 'player';

document.querySelector("main > div:nth-child(23)").appendChild(balle);
let posX = 23;
let gamepad10 = true 
document.body.addEventListener("keydown", function (e) {
    
           
    if (e.key === "ArrowRight" && gamepad10 === true || e.key === 'd' && gamepad10 === true) {
        balle.classList.remove('playersol');
        balle.classList.add('player');
        
        if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('border')) {
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
               const p = document.createElement('p')
           main.appendChild(p)
           p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
           p.className = 'leveltolevel'
               posX = 22
                gamepad10 = false
                gamepad9=true;
               levelkontrol=9;
               demarrer9=true
               demarrer10=false
               can=3;
              }
          }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
            posX = 21
            gamepad10 = false
            levelkontrol=11;
            demarrer11=true
        } else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('kalp')) {
                posX++
                document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                
                can++;
                document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
                }else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
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
    
    } else if (e.code === "ArrowLeft" && gamepad10 === true || e.key === 'a' && gamepad10 === true) {
        balle.classList.remove('player');
        balle.classList.add('playersol');
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')) {
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
               const p = document.createElement('p')
           main.appendChild(p)
           p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
           p.className = 'leveltolevel'
               posX = 22
                gamepad10 = false
                gamepad9=true;
               levelkontrol=9;
               demarrer9=true
               demarrer10=false
               can=3;
              }
          }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('border')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
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

        }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('kalp')) {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else {
            posX--
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
       
    } else if (e.code === "ArrowUp" && gamepad10 === true || e.key === 'w' && gamepad10 === true) {
        if(document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('maviportal')&&posX==107){
            posX=174
            }else if(document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('kırmızıportal')&&posX==245){
                posX=377
                }else if(document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('yeşilportal')&&posX==235){
                    posX=359
                    }
        if (document.querySelector("main > div:nth-child(" + (posX - 21) + ")").classList.contains('border')) {
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
               const p = document.createElement('p')
           main.appendChild(p)
           p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
           p.className = 'leveltolevel'
               posX = 22
                gamepad10 = false
                gamepad9=true;
               levelkontrol=9;
               demarrer9=true
               demarrer10=false
               can=3;
              }
          } else if (document.querySelector("main > div:nth-child(" + (posX - 21) + ")").classList.contains('border')) {
           
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        }else if (document.querySelector("main > div:nth-child(" + (posX - 21) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 21) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX - 21) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }} else if (document.querySelector("main > div:nth-child(" + (posX - 21) + ")").classList.contains('altın')) {
            posX-=21
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX -21) + ")").classList.contains('kalp')) {
            posX-=21
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            } else {
            posX -= 21
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
        
    } else if (e.code === "ArrowDown" && gamepad10 === true || e.key === 's' && gamepad10 === true) {
        if(document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('maviportal')&&posX==153){
            posX=86
            }else if(document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('kırmızıportal')&&posX==356){
                posX=224
                }else if(document.querySelector("main > div:nth-child(" + (posX ) + ")").classList.contains('yeşilportal')&&posX==338){
                    posX=214
                    }
        if (document.querySelector("main > div:nth-child(" + (posX + 21) + ")").classList.contains('border')) {
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
               const p = document.createElement('p')
           main.appendChild(p)
           p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
           p.className = 'leveltolevel'
               posX = 22
                gamepad10 = false
                gamepad9=true;
               levelkontrol=9;
               demarrer9=true
               demarrer10=false
               can=3;
              }
          } else if (document.querySelector("main > div:nth-child(" + (posX + 21) + ")").classList.contains('border')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
        }else if (document.querySelector("main > div:nth-child(" + (posX + 21) + ")").classList.contains('dikenlikaplumbağa')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}
              
               else if (document.querySelector("main > div:nth-child(" + (posX + 21) + ")").classList.contains('yabaniçiçek')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               } } else if (document.querySelector("main > div:nth-child(" + (posX + 21) + ")").classList.contains('dikenlikaplumbağasağ')) {
            
            can--;explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            if(can==0&&levelkontrol==10){
                const p = document.createElement('p')
            main.appendChild(p)
            p.textContent = "Canın kalmadı diye son altın mantarı topladığın levelden başlıyorsun!"
            p.className = 'leveltolevel'
                posX = 22
                demarrer10=false
                 gamepad10 = false
                 gamepad9=true;
                levelkontrol=9;
                demarrer9=true
                can=3;
               }}else if (document.querySelector("main > div:nth-child(" + (posX + 21) + ")").classList.contains('altın')) {
            posX+=21
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            altın++;
            
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('altın');
            if(altın==10){
                altın=0;
                can++;
              }
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;

        }else if (document.querySelector("main > div:nth-child(" + (posX + 21) + ")").classList.contains('kalp')) {
            posX+=21
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
            can++;
            document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
            explanations.innerHTML = 'Yabani çiçeklere ve dikenli düşmanlara dikkat et!<br>Level: '+levelkontrol+'<br>Can: '+can+'<br>Altın: '+altın;
            }else {
            posX += 21
            document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
            
        }
    }
})
}
})