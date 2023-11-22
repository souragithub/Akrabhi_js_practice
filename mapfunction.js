const arr = [2,3,4,5]

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}
 
const output = arr.map(double);
const result = arr.map(triple);
const bin = arr.map(binary);
console.log(output);
console.log(result);
console.log(bin);

const RES = arr.map((x) => x.toString(2));
console.log(RES);  