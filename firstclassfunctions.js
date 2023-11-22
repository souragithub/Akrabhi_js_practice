//function statement same as function declaration
function a(){
    var x = 10;
    console.log(x);
}
a();

//function expression 
var b = function(){
    console.log("Result");
}
b();

//anonymous function
function () {

}

//Named function expression
var b = function xyz(){
    console.log("xyz")
}
b();
xyz();

//parametres and arguements 
var b = function (param1 , param2){
    console.log("b called")
}
b(1 , 2);

//first class functions(ability to use function as values ) 
var b =function(param3){
        return function xyz(){

        }
}
console.log(b());