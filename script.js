var allBubbles = "";
var initialTimer = 60;
var score = 0;
var hit = 0;
const ting = new Audio("ting.mp3")
const gOver = new Audio("gameover.mp3")

function bubbles(){
for(var i=1; i <= 133; i++ ){
    var randonNumber = Math.floor(Math.random()*10)

    allBubbles += `<div class="bubble">${randonNumber}</div>`;
}

document.querySelector("#pbtm").innerHTML = allBubbles
}
function gameTimer(){
    var timer = setInterval(function(){
        if(initialTimer>0){
            initialTimer--;
            document.querySelector(".timeInterval").textContent = initialTimer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<div id="replay">
            <h1 id = "gameover">game over</h1>
            <button id="resetbutton">PLAY AGAIN</button>
        </div>
         `
            gOver.play();

        }
    },1000)
}
function hitRandom(){
    hit = Math.floor(Math.random()*10)
    document.querySelector(".hitnumber").textContent = hit;
}
function increaseScore(){
    score += 10;
    document.querySelector(".scoreCounter").innerHTML = score;
}
function game(){
    document.querySelector("#pbtm").addEventListener("click", function(details){
        var clickedNum = Number(details.target.textContent); 

        if(hit === clickedNum){
            bubbles();
            hitRandom();
            increaseScore();
            ting.play();

        }
        else{
            document.querySelector("#pbtm").innerHTML = `<div id="replay">
            <h1 id = "gameover">game over</h1>
            <button id="resetbutton">PLAY AGAIN</button>
        </div>`
            gOver.play();
        }
    });
}




bubbles();
gameTimer();
game();
hitRandom();

// ... Your existing code ...

function resetGame() {
    initialTimer = 60;
    score = 0;
    document.querySelector(".scoreCounter").innerHTML = score;
    document.querySelector(".timeInterval").textContent = initialTimer;
    bubbles();
    hitRandom();
    gameTimer();
}

document.addEventListener("click", function (event) {
    if (event.target.id === "resetbutton") {
        resetGame();
    }
});
