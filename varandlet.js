function abcd(){
    for(var i =0;i<12;i++){
    console.log(i);//1,2,3,4,5,6,7,8,9,10,11
}
console.log(i);//12 
}
abcd();

function xyz(){
    for(let i=0;i<10;i++){
        console.log(i);//1,2,3,4,5,6,7,8,9,10,11
    }
    console.log(i);//undefined
}
xyz();