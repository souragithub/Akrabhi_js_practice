function myfunc(text,callback){
    setTimeout(function(){
        callback(text);
    },2000);
}
myfunc('Hello World',console.log);