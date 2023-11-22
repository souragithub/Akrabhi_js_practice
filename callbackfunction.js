setTimeout(function (){
    console.log("Timer");
}, 5000);

// function passed into another function is called as call back function
function x(y){
    console.log("xyz");
    y();
}
x(function y(){
    console.log("abc");
}//call back function
);