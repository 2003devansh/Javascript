//  function statement or function declaration 
 function a(){
    console.log("a is called");
}
a() ;

// function expression 
var b = function () {
    console.log("b is called") ; 
}
b() ;


// diffrence between these two is hoisting 
// function statement will execute and 
// function expression will throw error 

 // ----------
// anonyus funct :- function without the name  
// function(){
//     console.log("aswdf");
    
//  used in a place where function used as a value  



// }

// name function expression :- 
 var vh  = function df(){
    console.log("heyy");
}

// first class function 


var gh  = function(){
    return function(){

    }
}

 console.log(gh());
 

