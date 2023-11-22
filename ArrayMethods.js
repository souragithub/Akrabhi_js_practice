//MAP
//return array where each element is transformed as specified by the function

const arr = [1,2,3,4];
const mapped=arr.map(x=>x+20);
console.log(mapped);

//FILTER
//Returns array of elements where the function returns true

const xyz=[12,13,14,15];
const filtered = xyz.filter(el=>el === 15 ||el === 12);
console.log(filtered);

//REDUCE
//accumulate values as specified in function

const abc=[1,2,3,4,5,];
const reduced=abc.reduce((acc,curr)=>acc+curr);
console.log(reduced);

//FIND, FINDINDEX, INDEXOF

//find: returns the first instance that matches the specified criteria.
const qwe=[1,2,3,4,5,6,7,8,9,10];
const found = qwe.find(el=>el>5);
console.log(found);
//findIndex:returns the index of the first matching element 
const asd=["prims","ann","primsann","baral"];
const FoundIndex = asd.findIndex(el=>el==="primsann");
console.log(FoundIndex);
//indexOf:instead of taking a function as an argument it takes a simple value
const zxc=["prims","ann","primsann","baral"];
const foundIndexof = zxc.indexOf("primsann");
console.log(foundIndexof);

//PUSH,POP,SHIFT,UNSHIFT

//push:adds an item to the end of the array
let xc = [1,2,3];
const pushed = xc.push(5);
console.log(xc);
console.log(pushed);
//pop:removes the last item from an array
let zx=[2,3,4,5,6];
let popped = zx.pop();
console.log(zx);
//shift:removes the first item from an array
let cv=[3,4,5,6,7];
const shifted = cv.shift();
console.log(cv);
console.log(shifted);
//unshift:adds one or more elements to the beginning 
let sd=[4,5,6,9,1];
const unshifted = sd.unshift(5,6,7);
console.log(sd);

//SPLICE,SLICE,SORT

//splice:change the contents of the array by either removing , replacing or adding elements to the array 
let dfg = ['a','c','d','e'];
const spliced = dfg.splice(1,0,'b');//read as at positon 1 removes 0 element and insert 'b'
console.log(dfg);
//slice:returns a shallow copy of an array from a specified start position and before a specified end position
let array = ['a','b','c','d','e'];
const sliced = array.slice(2,4);
console.log(sliced);
//sort:sorts an array based on the provided function which takes a first element and second element argument
let asdf=[1,3,4,5,6,-2,-4];
const sorter=(firstEl,secondEl)=>firstEl - secondEl;
asdf.sort(sorter);
console.log(asdf);