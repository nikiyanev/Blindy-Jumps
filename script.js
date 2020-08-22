var character = document.getElementById("character");
var block = document.getElementById("block");
var gameWidth = Number(document.getElementById('game').offsetWidth);
var totalScores = document.getElementById("totalScores");
var totalJumps = document.getElementById("totalJumps"); 
var html = document.getElementById("html"); 
var gameResetH4 = document.getElementById("h4");
var speedUp = document.getElementById("speedUp");
var newBoss = document.getElementById("newBoss");

let speedUpArr = [7, 15, 25, 35, 45, 55, 65, 75];
let scores = 0;
let jumps = 0;

if (gameWidth > 600) {
    window.onkeydown = function(event){
        if(event.keyCode === 32) {
            event.preventDefault();
            html.click(); 

            if (game.style.display != "none") {
                jumpSound()
                jumps += 1;
            }
            
            if(character.classList != "animate") {
                character.classList.add("animate");    
            }     

            if (jumps > 0 && jumps <= 7) {
                scores += 10;
                if (jumps === 7) {
                    block.style.animationDuration = "1.8s";
                    block.style.backgroundImage = "url(images/snail.svg)";
                }
            } else if (jumps > 7 && jumps <= 15) {
                scores += 20;
                scoresPerClick.innerText = `${20}`;
                if (jumps === 15) {
                    block.style.animationDuration = "1.6s";
                    block.style.backgroundImage = "url(images/hair-head.svg)";
                }
            } else if (jumps > 15 && jumps <= 25) {
                scores += 30;
                scoresPerClick.innerText = `${30}`;
                if (jumps === 25) {
                    block.style.animationDuration = "1.4s";
                    block.style.backgroundImage = "url(images/rock.svg)";
                }
            } else if (jumps > 25 && jumps <= 35) {
                scores += 40;
                scoresPerClick.innerText = `${40}`;
                if (jumps === 35) {
                    block.style.animationDuration = "1.2s";
                    block.style.backgroundImage = "url(images/mushroom.svg)";
                }
            } else if (jumps > 35 && jumps <= 45) {
                scores += 50;
                scoresPerClick.innerText = `${50}`;
                if (jumps === 45) {
                    block.style.animationDuration = "1s";
                    block.style.backgroundImage = "url(images/scary-face.svg)";
                }
            } else if (jumps > 45 && jumps <= 55) {
                scores += 60;
                scoresPerClick.innerText = `${60}`;
                if (jumps === 55) {
                    block.style.animationDuration = "0.8s";
                    block.style.backgroundImage = "url(images/bomb.svg)";
                }
            } else if (jumps > 55 && jumps <= 65) {
                scores += 70;
                scoresPerClick.innerText = `${70}`;
                if (jumps === 65) {
                    block.style.animationDuration = "0.6s";
                }
            } else if (jumps > 65 && jumps <= 75) {
                scores += 80;
                scoresPerClick.innerText = `${80}`;
                if (jumps === 75) {
                    block.style.animationDuration = "0.5s";
                }
            } else if (jumps > 75) {
                scores += 90;
                scoresPerClick.innerText = `${90}`;
                if (jumps === 85) {
                    block.style.animationDuration = "0.4s";
                }
            }      

            if(speedUpArr.includes(jumps)) {
                speedUp.style.display = "block";
                newBoss.style.display = "block";
                setTimeout(function() {
                    speedUp.style.display = "none";
                    newBoss.style.display = "none";
                }, 1800);
            } 
            
            totalScores.innerText = `${scores}`;
            totalJumps.innerText = `${jumps}`;       

            setTimeout(function() {
                character.classList.remove("animate");
            }, 500);
           
        }
    };
} else {
    html.addEventListener('click', (e) => {

        if(character.classList != "animate") {
            character.classList.add("animate");
        }

        jumpSound()
        jumps += 1;
    
        if (jumps > 0 && jumps <= 7) {
            scores += 10;
            if (jumps === 7) {
                block.style.animationDuration = "1.8s";
                block.style.backgroundImage = "url(images/snail.svg)";
            }
        } else if (jumps > 7 && jumps <= 15) {
            scores += 20;
            scoresPerClick.innerText = `${20}`;
            if (jumps === 15) {
                block.style.animationDuration = "1.6s";
                block.style.backgroundImage = "url(images/hair-head.svg)";
            }
        } else if (jumps > 15 && jumps <= 25) {
            scores += 30;
            scoresPerClick.innerText = `${30}`;
            if (jumps === 25) {
                block.style.animationDuration = "1.4s";
                block.style.backgroundImage = "url(images/rock.svg)";
            }
        } else if (jumps > 25 && jumps <= 35) {
            scores += 40;
            scoresPerClick.innerText = `${40}`;
            if (jumps === 35) {
                block.style.animationDuration = "1.2s";
                block.style.backgroundImage = "url(images/mushroom.svg)";
            }
        } else if (jumps > 35 && jumps <= 45) {
            scores += 50;
            scoresPerClick.innerText = `${50}`;
            if (jumps === 45) {
                block.style.animationDuration = "1s";
                block.style.backgroundImage = "url(images/scary-face.svg)";
            }
        } else if (jumps > 45 && jumps <= 55) {
            scores += 60;
            scoresPerClick.innerText = `${60}`;
            if (jumps === 55) {
                block.style.animationDuration = "0.8s";
                block.style.backgroundImage = "url(images/bomb.svg)";
            }
        } else if (jumps > 55 && jumps <= 65) {
            scores += 70;
            scoresPerClick.innerText = `${70}`;
            if (jumps === 65) {
                block.style.animationDuration = "0.6s";
            }
        } else if (jumps > 65 && jumps <= 75) {
            scores += 80;
            scoresPerClick.innerText = `${80}`;
            if (jumps === 75) {
                block.style.animationDuration = "0.5s";
            }
        } else if (jumps > 75) {
            scores += 90;
            scoresPerClick.innerText = `${90}`;
            if (jumps === 85) {
                block.style.animationDuration = "0.4s";
            }
        }         

        if(speedUpArr.includes(jumps)) {
            speedUp.style.display = "block";
            newBoss.style.display = "block";
            setTimeout(function() {
                speedUp.style.display = "none";
                newBoss.style.display = "none";
            }, 1800);
        } 
    
        totalScores.innerText = `${scores}`;
        totalJumps.innerText = `${jumps}`;   
    
        setTimeout(function() {
            character.classList.remove("animate");
        }, 500);
    });
    
}

var chekDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (gameWidth > 600) {
        if (blockLeft < 120 && blockLeft > 80 && characterTop >= 260) {
            // crashSound()
            game.style.display = "none";
            gameResetH4.style.display = "none";   
            alert(`YOU LOSE!`);
        } 
    } else {
        if (blockLeft < 80 && blockLeft > 40 && characterTop >= 260) {
            // crashSound()
            game.style.display = "none";
            gameResetH4.style.display = "none";   
            alert(`YOU LOSE!`);
        } 
    }
}, 10);

function jumpSound(){
    // var audio = new Audio("../sounds/jump.mp3");
    var audio = new Audio("https://raw.githubusercontent.com/nikiyanev/Blindy-Jumps/master/sounds/jump.mp3"); // this is way to play audio file ot github page :)
    audio.play();
}

function crashSound(){
    var audio = new Audio("../sounds/crash.mp3");
    audio.play();
}