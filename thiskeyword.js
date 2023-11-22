var a = 12; // global scope 
console.log(this); //gives window

function abcd(){
    var b =24; //local scope
    console.log(this);
}
abcd();



var obj = {
    class: "First",
    baatkaro: function(){
        console.log(this);//gives object
    } //function inside a object is called method
}
obj.baatkaro();