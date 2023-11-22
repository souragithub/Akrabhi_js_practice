var timer = 5;
var score = 0;
var hitnum = 0;

function game(){
    var clutter="";

for(var i=0;i<=130;i++){
    var a =Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${a}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent=score;
}

function setHitval(){
    hitnum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitnum;
}

function runTimer(){

    const timerin = setInterval(function(){
        if(timer>0){
        timer --;
        document.querySelector("#timerclk").textContent=timer;}
        else{
            clearInterval(timerin);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum === hitnum){
    increaseScore();
    setHitval();

   }
});

setHitval();
runTimer();
game();
