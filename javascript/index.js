 // closures

//  function c(){
//     var a = 19  ;
//     function d(){
//         console.log(a);
        
//     }

//     d() ;
//  }

//  c() ;
 // closure is a function bind together with its lexical enviroment
 // function y bind to its parent's lexical scope to form a closures

 function t(){
    for(let i = 1  ; i <= 5 ;i++){
        setTimeout(function() {
            console.log(i);  
        }, i * 1000) ;
    }
    console.log("js");
 }
t() ;

// if we  take the var i = 0 ;
// then it has a global scope by which all the time function called
// it will rember its all old refrence due to the lexical enviroment
