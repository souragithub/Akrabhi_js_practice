function a(){
    c();
    console.log(b);
    function c(){
        console.log(b); 
    }
}
var b = 10;
a();