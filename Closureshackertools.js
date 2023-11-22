function createGreeter(greeting){
    return function(name)
    {
        console.log(greeting + ',' + name);}
}

const val = createGreeter('hello');
val('joe');

