const p = new Promise(function(resolve,reject) {
    resolve("promise resolved value") ;
})

async function promiseFunction() {
    const val  = await p ; 
    console.log(val) ;
    
}

promiseFunction();