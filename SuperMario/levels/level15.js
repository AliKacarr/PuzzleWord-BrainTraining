const level15 = `********************TTTTTTTTTTTTTTTTT**TYYYYYYYYYYYYYYYY**TYTTTTTTTYTTTTTTY**TYTTTSTTTYYYYYYYY**TYT.....TYTTYTYTY**TYT.....TYTTYTYTY**TYT.....TYTTYTYTY**TYT.....TYYYYTYTY**TYT.....TTTTTTYTY**TYT.ÖÖ.ÖÖZTTTTYTY**TYT.ÖÖÖ..ZP..YYTY**TYTBBBBB.ZTTTTTTY**TYTKKKKKTTTTTTTTY**TYTTTYTTTTTTTTTTY**TYYYYYYYYYYYYYYYY**TTTTTTTTTTTTTTTTT********************`
 


document.body.addEventListener('keydown', function (e) {
    if (levelkontrol===15 && demarrer15 === true) {
        explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
        demarrer15 = false
        main.textContent = '' 
        main.className = 'level15'; 
        for (let i = 0; i < level15.length; i++) {
            const tiles = document.createElement('div');
            tiles.className = 'tile';
            main.appendChild(tiles);

             if (level15[i] === '.') {
                tiles.className = 'tile path';
            } else if (level15[i] === '*') {
                tiles.className = 'tile wall';
            }else if (level15[i] === 'S') {
                tiles.className = 'tile start';
            }else if (level15[i] === 'T') {
                tiles.className = 'tile toprak';
            } else if (level15[i] === 'P') {
                tiles.className = 'tile prenses';
            } else if (level15[i] === 'B') {
                tiles.className = 'tile solboss';
            }else if (level15[i] === 'Ö') {
                tiles.className = 'tile sağboss';
            }else if (level15[i] === 'Y') {
                tiles.className = 'tile yol';
            }else if (level15[i] === 'K') {
                tiles.className = 'tile kalp';
            }else if (level15[i] === 'Z') {
                tiles.className = 'tile zindan';
            }
        }
        const balle = document.createElement('div');
        balle.className = 'player';

        document.querySelector("main > div:nth-child(83)").appendChild(balle);
        let i=0;
        let posX = 83;
        let gamepad15=true;
        let ölüm15=0;
        document.body.addEventListener("keydown", function (e) {
            if(levelkontrol==15&&ölüm15==0){
                i++;
                if (i%2==0) {
                      document.querySelector("main > div:nth-child(" + 195 + ")").classList.remove('solboss');
                      document.querySelector("main > div:nth-child(" + 196 + ")").classList.remove('solboss');
                      document.querySelector("main > div:nth-child(" + 196 + ")").classList.add('sağboss');
                      document.querySelector("main > div:nth-child(" + 197 + ")").classList.add('sağboss');
                      document.querySelector("main > div:nth-child(" + 198 + ")").classList.remove('solboss')
                      document.querySelector("main > div:nth-child(" + 199 + ")").classList.remove('solboss');
                      document.querySelector("main > div:nth-child(" + 199 + ")").classList.add('sağboss');
                      document.querySelector("main > div:nth-child(" + 200 + ")").classList.add('sağboss');
                            document.querySelector("main > div:nth-child(" + 233 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 233 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 234 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 234 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 235 + ")").classList.remove('sağboss')
                            document.querySelector("main > div:nth-child(" + 235 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 236 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 236 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 237 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 237 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 238 + ")").classList.remove('sağboss');
                } else if(i%2==1){
                  document.querySelector("main > div:nth-child(" + 195 + ")").classList.add('solboss');
                  document.querySelector("main > div:nth-child(" + 196 + ")").classList.remove('sağboss');
                  document.querySelector("main > div:nth-child(" + 196 + ")").classList.add('solboss');
                  document.querySelector("main > div:nth-child(" + 197 + ")").classList.remove('sağboss');
                  document.querySelector("main > div:nth-child(" + 198 + ")").classList.add('solboss');
                  document.querySelector("main > div:nth-child(" + 199 + ")").classList.remove('sağboss');
                  document.querySelector("main > div:nth-child(" + 199 + ")").classList.add('solboss');
                  document.querySelector("main > div:nth-child(" + 200 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 233 + ")").classList.remove('solboss');
                            document.querySelector("main > div:nth-child(" + 234 + ")").classList.remove('solboss');
                            document.querySelector("main > div:nth-child(" + 234 + ")").classList.add('sağboss');
                            document.querySelector("main > div:nth-child(" + 235 + ")").classList.remove('solboss')
                            document.querySelector("main > div:nth-child(" + 235 + ")").classList.add('sağboss');
                            document.querySelector("main > div:nth-child(" + 236 + ")").classList.remove('solboss');
                            document.querySelector("main > div:nth-child(" + 236 + ")").classList.add('sağboss');
                            document.querySelector("main > div:nth-child(" + 237 + ")").classList.remove('solboss');
                            document.querySelector("main > div:nth-child(" + 237 + ")").classList.add('sağboss');
                            document.querySelector("main > div:nth-child(" + 238 + ")").classList.remove('solboss');
                            document.querySelector("main > div:nth-child(" + 238 + ")").classList.add('sağboss');
                }if(i%6==0){console.log(0)
                    document.querySelector("main > div:nth-child(" + 214 + ")").classList.remove('solboss');
                            document.querySelector("main > div:nth-child(" + 215 + ")").classList.remove('solboss');
                            document.querySelector("main > div:nth-child(" + 215 + ")").classList.add('sağboss');
                            document.querySelector("main > div:nth-child(" + 216 + ")").classList.remove('solboss')
                            document.querySelector("main > div:nth-child(" + 216 + ")").classList.add('sağboss');
                            document.querySelector("main > div:nth-child(" + 217 + ")").classList.add('sağboss');
                }else if(i%6==1){console.log(1)
                            document.querySelector("main > div:nth-child(" + 215 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 218 + ")").classList.add('sağboss');
                }else if(i%6==2){console.log(2)
                            document.querySelector("main > div:nth-child(" + 216 + ")").classList.remove('sağboss')
                            document.querySelector("main > div:nth-child(" + 219 + ")").classList.add('sağboss');
                }else if(i%6==3){console.log(3)
                            document.querySelector("main > div:nth-child(" + 216 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 217 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 217 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 218 + ")").classList.remove('sağboss');
                            document.querySelector("main > div:nth-child(" + 218 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 219 + ")").classList.remove('sağboss');
                }else if(i%6==4){console.log(4)
                            document.querySelector("main > div:nth-child(" + 215 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 218 + ")").classList.remove('solboss');
                }else if(i%6==5){console.log(5)
                            document.querySelector("main > div:nth-child(" + 214 + ")").classList.add('solboss');
                            document.querySelector("main > div:nth-child(" + 217 + ")").classList.remove('solboss');
                }
             }
            
            if (posX % 19 >= 12 || posX %19 == 0) {
                document.querySelector("main > div:nth-child(" + 221 + ")").classList.remove('prenses');
                document.querySelector("main > div:nth-child(" + 221 + ")").classList.add('prensessağ');
            } else {
                document.querySelector("main > div:nth-child(" + 221 + ")").classList.remove('prensessağ');
                document.querySelector("main > div:nth-child(" + 221 + ")").classList.add('prenses');
            }
            if (e.key === "ArrowRight" &&gamepad15===true|| e.key === 'd'&&gamepad15===true) {
                balle.classList.remove('playersol');
        balle.classList.add('player');
            if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
             } else if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('toprak')) {
                   
                }else if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('zindan')) {
                   
                } else if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('solboss')) {
                    
                    can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
            if(can==0&&levelkontrol==15){
                const p = document.createElement('p')
            main.appendChild(p)
            ölüm15=1;
            p.className = 'leveltolevel'
                posX = 83
                 gamepad15 = false
                 gamepad16=true;
                levelkontrol=16;
                demarrer16=true
                demarrer15=false
                can=3;
               } }else if (document.querySelector("main>div:nth-child(" + (posX + 1) + ")").classList.contains('sağboss')) {
               
                can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                if(can==0&&levelkontrol==15){
                    const p = document.createElement('p')
                main.appendChild(p)
                ölüm15=1;
                p.className = 'leveltolevel'
                    posX = 83
                     gamepad15 = false
                     gamepad16=true;
                    levelkontrol=16;
                    demarrer16=true
                    demarrer15=false
                    can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX + 1) + ")").classList.contains('kalp')) {
                    posX++
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                    can++;
                    document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                    explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                    }
                 else {
                    posX++
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                }
                
            } else if (e.code === "ArrowLeft" &&gamepad15===true|| e.key === 'a'&&gamepad15===true) {
                balle.classList.remove('player');
        balle.classList.add('playersol');
        if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
        } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('toprak')) {
                   
                } else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('solboss')) {
                    
                    can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                    if(can==0&&levelkontrol==15){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm15=1;
                    p.className = 'leveltolevel'
                        posX = 83
                         gamepad15 = false
                         gamepad16=true;
                        levelkontrol=16;
                        demarrer16=true
                        demarrer15=false
                        can=3;
                       } }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('sağboss')) {
                        
                        can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                        if(can==0&&levelkontrol==15){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm15=1;
                        p.className = 'leveltolevel'
                            posX = 83
                             gamepad15 = false
                             gamepad16=true;
                            levelkontrol=16;
                            demarrer16=true
                            demarrer15=false
                            can=3;
                           } }else if (document.querySelector("main > div:nth-child(" + (posX - 1) + ")").classList.contains('kalp')) {
                    posX--
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                    can++;
                    document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                    explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                    } else if (document.querySelector("main>div:nth-child(" + (posX - 1) + ")").classList.contains('prensessağ')) {
                    posX++
                    balle.className = '' 
                    main.textContent = '' 
                    explanations.textContent = '' 
                    explanations.className = ''
                    body.className = 'body' 
                    const p = document.createElement('p')
                    body.appendChild(p)
                    p.className = 'finish'
                } else {
                    posX--
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                }
              
            } else if (e.code === "ArrowUp" &&gamepad15===true|| e.key === 'w'&&gamepad15===true) {
                if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('wall')) {
                } else if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('toprak')) {
                   
                } else if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('solboss')) {
                    
                    can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                    if(can==0&&levelkontrol==15){
                        const p = document.createElement('p')
                    main.appendChild(p)
                    ölüm15=1;
                    p.className = 'leveltolevel'
                        posX = 83
                         gamepad15 = false
                         gamepad16=true;
                        levelkontrol=16;
                        demarrer16=true
                        demarrer15=false
                        can=3;
                       } }else if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('sağboss')) {
                        
                        can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                        if(can==0&&levelkontrol==15){
                            const p = document.createElement('p')
                        main.appendChild(p)
                        ölüm15=1;
                        p.className = 'leveltolevel'
                            posX = 83
                             gamepad15 = false
                             gamepad16=true;
                            levelkontrol=16;
                            demarrer16=true
                            demarrer15=false
                            can=3;
                           } }else if (document.querySelector("main > div:nth-child(" + (posX - 19) + ")").classList.contains('kalp')) {
                    posX-=19
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                    can++;
                    document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                    explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                    } else {
                    posX -= 19
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                }
               
            } else if (e.code === "ArrowDown" &&gamepad15===true|| e.key === 's'&&gamepad15===true) {
                if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('wall')) {
                } else if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('toprak')) {
                   
                } else if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('solboss')) {
                    
                    can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
            if(can==0&&levelkontrol==15){
                const p = document.createElement('p')
            main.appendChild(p)
            ölüm15=1;
            p.className = 'leveltolevel'
                posX = 83
                 gamepad15 = false
                 gamepad16=true;
                levelkontrol=16;
                demarrer16=true
                demarrer15=false
                can=3;
               }  }else if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('sağboss')) {
                
                can--;explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                if(can==0&&levelkontrol==15){
                    const p = document.createElement('p')
                main.appendChild(p)
                ölüm15=1;
                p.className = 'leveltolevel'
                    posX = 83
                     gamepad15 = false
                     gamepad16=true;
                    levelkontrol=16;
                    demarrer16=true
                    demarrer15=false
                    can=3;
                   }}else if (document.querySelector("main > div:nth-child(" + (posX + 19) + ")").classList.contains('kalp')) {
                    posX+=19
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                    can++;
                    document.querySelector("main > div:nth-child(" + posX + ")").classList.remove('kalp');
                    explanations.innerHTML = 'Prensesi kurtarmak için tüm gizli yolları dene!<br>level: '+levelkontrol+'<br>Can: '+can+"<br>Altın: "+altın;
                    } else {
                    posX += 19
                    document.querySelector("main > div:nth-child(" + posX + ")").appendChild(balle)
                    
                }
            }
        })
    }

})