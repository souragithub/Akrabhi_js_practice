let var1 = "myString";
let var2 = var1;
var2 = "this is my string";

console.log(var1);
console.log(var2);

let var3 = {
    name: "prims",
};
let var4 = var3;
var4.name = "Ann";

console.log(var3);
console.log(var4);

//Js always assigns variables by value. when the assigned value is an Array, Function, or Object a reference to the object in memory is assigned.