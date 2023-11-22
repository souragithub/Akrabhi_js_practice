console.log(b);
var b = 100;//undefined

console.log(x);//x is not defined(Reference Error)

console.log(a);//Cannot access 'a' before initialization(Reference Error)
let a = 10;

const c = 1000;
console.log(c);//1000
c=1000;//Assignment to constant variable(Type Error)

const d;
d=1000;//Missing initializer in const declaration(Syntax Error)