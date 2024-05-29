console.log("first")
setTimeout(()=>{
   console.log("second")
},3000)
console.log("third");

// first and third main stack mai jayenge aur second vala side stack mai 
// jab main stack ka excecution complete ho jayega to side stack excute hoga