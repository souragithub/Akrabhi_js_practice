function xyz(){
    this.width = 12;
    this.height = 5;
    this.taste ="sugary";                              // this is by default pointing to the wimdow 
}

var b1 = new  xyz();
var b2 = new xyz();
var b3 = new xyz()
// new keyword added with constructor function gives instance 

function abc(color){
    this.radius = 2;
    this.color  = color;
    this.icon = false;
    this.pressable = true;
}

var redbtn = new abc("red");
var greenbtn = new abc("green");