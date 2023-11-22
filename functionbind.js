let user = {
    firstName: "john"
};

function func(phase){
    console.log(phase+ " "+this.firstName);
}

let funcUser=  func.bind(user);
funcUser("hello");

let def = {
    firstName :"prims",
    sayHi(){
        console.log('hello, ${this.firstName}!');
    }
};

let sayHi = user.sayHi.bind(def);
sayHi();
setTimeout(sayHi,1000);
