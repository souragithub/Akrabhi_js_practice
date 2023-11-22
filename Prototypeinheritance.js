// to do the same thing in js with the help of prototype 
var human = {
    name : "pritam",
    canfly: "false",
    cantalk: "true",
    willdie: "true",
}

var monkey = {
    canclimb: "true",
    canhurt: "true",
}

monkey.__proto__ = human;