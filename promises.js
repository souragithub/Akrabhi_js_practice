const myPromise = new Promise(function(res,rej){
    setTimeout(function(){
        if(Math.random()<2){
            return res('Hooray!');
        }
        return rej('Oh no!');
    },1000);
});

myPromise.then(function(data)
 {console.log('Success: ' + data);
}).catch(function(err) {console.log('Error: ' + err);});

