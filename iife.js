let paintColor = "red"
const paint = (()=>{
    return {
        changeColorToBlue: ()=> {
            paintColor: 'blue';
            return paintColor;
        },
        changeColorToGreen: ()=>{
            paintColor: 'green';
            return paintColor;
        }
    }
})();
console.log(
    paint.changeColorToGreen()
);