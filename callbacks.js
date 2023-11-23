 const cart = ["shoes","shirt","kurtas"];

 api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(
            function(){
                api.updateWallet()
                }
                
        )
    })
})

// this is called call back hell
//when many a callback function comes into work
//this structure is know as pyramid of doom 
//Inversion of control:- this is issue when we loose the control when we use many callbacks.
// we cannot blindly believe on the call back function to do his work because we have pass this function to another function , now we have given the control of this function to the other function and now we dont know and now we dont know that call back function will ever execute or workout or not. 
