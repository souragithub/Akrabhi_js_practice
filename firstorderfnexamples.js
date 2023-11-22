const users = [
    {firstname: "raju", lastname: "rastogi" , age : 27},
    {firstname: "pritam", lastname: "baral", age:23},
    {firstname: "jhilly", lastname: "dhal" , age : 54},
]

const output = users.map(x => x.firstname + " "+ x.lastname);
console.log(output);

const result = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(result);
