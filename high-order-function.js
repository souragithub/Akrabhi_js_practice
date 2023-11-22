const radius =[3,1,3,4];

/*const calculatearea = function(){
    const output =  [];
    for(let i = 0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
    };
console.log(calculatearea(radius));

const calculatecircumference = function(){
    const output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
    };
console.log(calculatecircumference(radius));

const calculatediametre = function(){
    const output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(2 * radius[i]);
    }
    return output;
    };
console.log(calculatediametre(radius));*/

const area = function(radius){
    return Math.PI * radius *radius;
};


const circumference = function(radius){
    return 2*Math.PI*radius;
};

const diametre = function(radius){
    return 2 * radius;
};


const calculate = function(radius, logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
    output.push(logic(radius[i]));
}
return output;
};

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diametre));

