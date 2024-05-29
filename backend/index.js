   // foreach  , map , filter , fond , indexof 


   //  foreach 
   var arr  = [1 ,2 ,3, 4 ]

   arr.forEach(function(val){
    console.log(val + "hello")

   })
   

// It creates a new array with the results of calling a provided function on every element in the calling array
// map tab used hota hai jab hum ek aur array use karna chate hai 
var ans  =  arr.map((val)=>{
   return  val * 14  ;
})
console.log(ans);

//The .filter method in JavaScript is used to create a new array containing all elements of the original array that pass a test implemented by the provided function
  

var ans2  =arr.filter((val)=>{
    if(val > 3){
        return true ;
    }else{
        return false ;
    }
})
;console.log(ans2);