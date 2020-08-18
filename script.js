var character = document.getElementById("character");
var block = document.getElementById("block");
var gameWidth = Number(document.getElementById('game').offsetWidth);
var totalScores = document.getElementById("totalScores");
var totalJumps = document.getElementById("totalJumps"); 
var scoresPerClick = document.getElementById("scoresPerClick"); 
var html = document.getElementById("html"); 
var backgroundImg = document.getElementById("background-img");
var gameResetH4 = document.getElementById("h4");
var speedUp = document.getElementById("speedUp");

let speedUpArr = [7, 15, 25, 35, 45, 55, 65, 75];
let scores = 0;
let jumps = 0;

if (gameWidth > 600) {
    window.onkeydown = function(event){
        if(event.keyCode === 32) {
            event.preventDefault();
            html.click(); 
           
            jumps += 1;

            if(character.classList != "animate") {
                character.classList.add("animate");    
            }     

            if (jumps > 0 && jumps <= 7) {
                scores += 10;
            } else if (jumps > 7 && jumps <= 15) {
                scores += 20;
                scoresPerClick.innerText = `${20}`;
                block.style.animationDuration = "1.8s";
            } else if (jumps > 15 && jumps <= 25) {
                scores += 30;
                scoresPerClick.innerText = `${30}`;
                block.style.animationDuration = "1.6s";
            } else if (jumps > 25 && jumps <= 35) {
                scores += 40;
                scoresPerClick.innerText = `${40}`;
                block.style.animationDuration = "1.4s";
            } else if (jumps > 35 && jumps <= 45) {
                scores += 50;
                scoresPerClick.innerText = `${50}`;
                block.style.animationDuration = "1.2s";
            } else if (jumps > 45 && jumps <= 55) {
                scores += 60;
                scoresPerClick.innerText = `${60}`;
                block.style.animationDuration = "1s";
            } else if (jumps > 55 && jumps <= 65) {
                scores += 70;
                scoresPerClick.innerText = `${70}`;
                block.style.animationDuration = "0.8s";
            } else if (jumps > 65 && jumps <= 75) {
                scores += 80;
                scoresPerClick.innerText = `${80}`;
                block.style.animationDuration = "0.6s";
            } else if (jumps > 75) {
                scores += 90;
                scoresPerClick.innerText = `${90}`;
                block.style.animationDuration = "0.4s";
            }      

            if(speedUpArr.includes(jumps)) {
                speedUp.style.display = "block";
            } else {
                speedUp.style.display = "none";
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
        
        jumps += 1;

        if(character.classList != "animate") {
            character.classList.add("animate");
        }
    
        if (jumps > 0 && jumps <= 7) {
            scores += 10;
        } else if (jumps > 7 && jumps <= 15) {
            scores += 20;
            scoresPerClick.innerText = `${20}`;
            block.style.animationDuration = "1.8s";
        } else if (jumps > 15 && jumps <= 25) {
            scores += 30;
            scoresPerClick.innerText = `${30}`;
            block.style.animationDuration = "1.6s";
        } else if (jumps > 25 && jumps <= 35) {
            scores += 40;
            scoresPerClick.innerText = `${40}`;
            block.style.animationDuration = "1.4s";
        } else if (jumps > 35 && jumps <= 45) {
            scores += 50;
            scoresPerClick.innerText = `${50}`;
            block.style.animationDuration = "1.2s";
        } else if (jumps > 45 && jumps <= 55) {
            scores += 60;
            scoresPerClick.innerText = `${60}`;
            block.style.animationDuration = "1s";
        } else if (jumps > 55 && jumps <= 65) {
            scores += 70;
            scoresPerClick.innerText = `${70}`;
            block.style.animationDuration = "0.8s";
        } else if (jumps > 65 && jumps <= 75) {
            scores += 80;
            scoresPerClick.innerText = `${80}`;
            block.style.animationDuration = "0.6s";
        } else if (jumps > 75) {
            scores += 90;
            scoresPerClick.innerText = `${90}`;
            block.style.animationDuration = "0.4s";
        }  

        if(speedUpArr.includes(jumps)) {
            speedUp.style.display = "block";
        } else {
            speedUp.style.display = "none";
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

    if (blockLeft < 120 && blockLeft > 80 && characterTop >= 260) {
        game.style.display = "none";
        // block.style.display = "none";
        gameResetH4.style.display = "none";
        alert(`you lose!`);
    }
}, 10);

