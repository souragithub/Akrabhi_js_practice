const arr = [3,4,6,2,8];

//to take all the elements of an array come up with a single value out of them 

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
}
    return sum;
}
console.log(findSum(arr));

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log(output);

//to get max out of the array
function findMax(arr){
    let max = 0;
    for( let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const Result = arr.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max;
});
console.log(Result);
