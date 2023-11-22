function abcd(val){

}

abcd(function(){})// function that accepts the function in a paramaetre or return a funtion or both


function abcd(){
 return function(){}

} // while making closures we use high order functions

abcd();

var arr = [1,2,3,4,5];
arr.forEach(function(){}) //here forEach is a higher order function