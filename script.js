// --VARIABLES--
var character = document.getElementById("character");
var block = document.getElementById("block");
var gameWidth = Number(document.getElementById('game').offsetWidth);
var totalScores = document.getElementById("totalScores");
var totalJumps = document.getElementById("totalJumps"); 
var html = document.getElementById("html"); 
var gameResetH4 = document.getElementById("h4");
var speedUpText = document.getElementById("speedUp");
var newBossText = document.getElementById("newBoss");
var alert = document.getElementById("alert");
var nameGame = document.getElementById("nameGame");
var totalScoresPerClick = document.getElementById("scoresPerClick");
var divScoresContainer = document.getElementById("divScoresContainer");
var yourScoresText = document.getElementById("yourScores");
var bossImage = document.getElementById("bossImage");

let bossImageArr = ["url(images/Bosses/bear.svg)", "url(images/Bosses/minion.svg)", "url(images/Bosses/rock.svg)", "url(images/Bosses/turtle.svg)", "url(images/Bosses/mushroom.svg)", "url(images/Bosses/star.svg)", "url(images/Bosses/bomb.svg)", "url(images/Bosses/goldMushroom.svg)"];
let bossImageCount = 0;
let blockSpeedUp = 44;
let scoresPerClick = 10;
let scores = 0;
let jumps = 0;
let left = 0;

// --CHEK WIDTH (DESCTOP or MOBILE)--
if (gameWidth > 600) {
    window.onkeydown = function(event){
        if(event.keyCode === 32) {
            event.preventDefault();
            html.click(); 
            main()
        }
    };
} else {
    html.addEventListener('click', (e) => {
        main()
    });
}

var slideLeft = setInterval(slideLeftBlock, blockSpeedUp);

function slideLeftBlock() {
    if (gameWidth > 600 && left === -40) {
        left = 1000;
    } else if (gameWidth < 600 && left === -40){
        left = 640;
    }

    left -= 20;
    block.style.left = left + "px";
}

function main() {

    // --ADD CLASS TO JUMP--
    if(character.classList != "animate") {
        character.classList.add("animate");    
    } 
    // --ADD JUMPS, SCORES AND SOUND OF JUMP--
    if (game.style.display != "none") {         
        jumpSound()
        scores += scoresPerClick;
        jumps += 1;
    }
  
    // --CHEK TO SPEED UP--
    if (jumps % 5 === 0){
        clearInterval(slideLeft);
        blockSpeedUp -= 2;
        scoresPerClick += 10;
        slideLeft = setInterval(slideLeftBlock, blockSpeedUp);

        speedUpText.style.display = "block";
        setTimeout(function() {
            speedUpText.style.display = "none";
        }, 1800);
    }

    // --CHEK TO BOSS IMAGE CHANGE--
    if (jumps % 10 === 0 && jumps > 0) {
        block.style.backgroundImage = bossImageArr[bossImageCount];
        bossImage.style.backgroundImage = bossImageArr[bossImageCount];
        newBossText.style.display = "block";
        bossImageCount++;
        setTimeout(function() {
            newBossText.style.display = "none";
        }, 1800);
    } 
    // --ADD TEXT ON RUNTIME--
    totalScores.innerText = `${scores}`;
    totalJumps.innerText = `${jumps}`;       
    totalScoresPerClick.innerText = `${scoresPerClick}`
    
    // --REMOVE CLASS TO JUMP--
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
    
}

var chekDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (gameWidth > 600) {
        if (blockLeft < 120 && blockLeft > 80 && characterTop >= 260) {
            ifDead()
        } 
    } else {
        if (blockLeft < 80 && blockLeft > 40 && characterTop >= 260) {
            ifDead()
        } 
    }
}, 10);

function ifDead() {
    clearInterval(slideLeft);
    yourScoresText.innerText = `${scores}`;
    game.style.display = "none";
    gameResetH4.style.display = "none";   
    nameGame.style.display = "none";
    divScoresContainer.style.display = "block"
    alert.style.display = "block";
}

function jumpSound(){
    // var audio = new Audio("../sounds/jump.mp3");
    var audio = new Audio("https://raw.githubusercontent.com/nikiyanev/Blindy-Jumps/master/sounds/jump.mp3"); // this is way to play audio file on github page :)
    audio.play();
}