const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
for(let i =0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
}
return color;
};

let intervalId;
//const changeColorStart = setInterval(startChangingColor,1000);
const startChangingColor = function(){
    intervalId = setInterval(ColorStarted,1000);
    
    function ColorStarted(){
    document.body.style.backgroundColor = randomColor();
    }
};

document.querySelector("#start").
addEventListener('click',startChangingColor);

const stopChangingColor = function (){
    clearInterval(intervalId);
}

document.querySelector('#stop').
addEventListener('click',stopChangingColor);