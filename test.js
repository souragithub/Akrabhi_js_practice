var a = 100;
let b = 100;
const c = 100;
{
    function x(){var a = 10;
    console.log(a);}
    var a = 45;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
x();
console.log(a);
console.log(b);
console.log(c);