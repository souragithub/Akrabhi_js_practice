// 2 features :-
//It should always return same output for same output

function abcd(val){
    return Math.random()*val;
}
var ans1=abcd(2);
var ans2=abcd(2);

//It will never change/update the value of a global variable.
function xyz(a,b){
    return a*b;
}

var ans1 = xyz(1,2);
var ans2 = xyz(1,2);
