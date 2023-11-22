function attacheventlistener(){
    let count = 0;
    document.getElementById("click me").addEventListener("Click",function xyz(){
        console.log("Button Clicked", ++count);
    });
}
attacheventlistener();