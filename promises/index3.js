const cart = ["kurta" , "shorts" , "shoes"] ;

// how to create a promise 

const promise  = createOrder(cart) ; 

promise.then(function(orderId) {
    console.log(orderId); 
    // proced to payment api
    return orderId 
})
.then(function(){
  return   procedtoPayment(orderId)  ; 
})
.then(function(){
   return  paymentInfo(orderId) ;
})
.catch(function(err){
    console.log(err.message);
    
}) 

function createOrder(){
  
    const promise  = new Promise(function(resolve,reject){
        if(!validateuser(cart)){
            const err= new Error("cart is empty ") ; 
            reject(err) ;
        }

        const orderId  = "123" ;
         if(orderId){
            resolve(orderId) ; 
         }
    })

    return promise ; 

}

function validateuser(cart){
    return true  ; 
}

function procedtoPayment(){
    return new Promise(function(resolve,reject){
       resolve("payment succesful") ;  
    })
    

}