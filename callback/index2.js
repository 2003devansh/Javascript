// callbacks

setTimeout(function(){
  console.log("timer");
  
},5000)


function a(y){ // callingback  here
    console.log("heyy");
    y() ; 
}


a(function y(){
   console.log("heyy again ");
   
})