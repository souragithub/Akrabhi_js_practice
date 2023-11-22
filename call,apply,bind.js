function a(){
    console.log(this.age);
}
var obj ={age:24}
a.call(obj);


function b(val,val2,val3){
    console.log(this.age,val,val2,val3);
}

var obj = {age:24}

b.call(obj,1,2,3);

b.apply(obj, [1,2,3])

function abcd(){
    console.log(this);
}
var obj = {age:24}

var bindedfnc = abcd.bind(obj);
bindedfnc();