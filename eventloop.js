setTimeout(function c(){
   console.log("gita")
},3000);

//setTimeout(c , 3000);// gives the same result

console.log("start");
function b(){
    console.log("timer");
}
setTimeout(b,3000);
console.log("end");

function v(){
    console.log("data");
}
setTimeout(v,0);