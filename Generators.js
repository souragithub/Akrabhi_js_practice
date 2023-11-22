function* greeter() {
    yield 'Hi';
    yield 'How are you?';
    yield 'Bye';}
const greet = greeter();
console.log(greet.next().value);
console.log(greet.next().value);
console.log(greet.next().value);

function* idCreator(){
    let i=0;while(true)yield i++;
}
const ids = idCreator();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);