// used to filter out the values inside an array
 const arr = [2,3,5, 9 ,20];

// filter odd values
function isOdd(x){
    return x%2;
}


const output = arr.filter(isOdd);
console.log(output);

function isEven(x){
    return x%2===0;
}

const result = arr.filter(isEven);
console.log(result);


const res = arr.filter((x) =>  x > 4);
console.log(res);