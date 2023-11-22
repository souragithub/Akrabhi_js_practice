function c(){
    var a = 10;
    setTimeout(function (){
        console.log(a);
    }, 1000);
console.log("Namaste JavaScript");
}
c();


function x(){
    for (let i=1;i<=5;i++)
    setTimeout(function (){
        console.log(i);
    }, i*2000);
}
x();


function x(){
    for (var i=1;i<=5;i++){

        function close(u){
        setTimeout(function(){
            console.log(u);
    }, i*3000);}
    close (i);
}
}
x();