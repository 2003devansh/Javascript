// promises mai 3 component hote ha i 
// pending , resolve , reject 

// // resolve hone pe then chalta hai 
// // reject hone pe catch 

// var ans  = new Promise((res,rej)=>{
//     if(true){
//         return res() ; 
//     }else{
//         return rej() ; 
//     }
// })
// ans.then(function(){
//     console.log("resolved");
// }).catch(function(){
//     console.log("rejected");
// })

// var ans  = new Promise((res,rej)=>{
//     var number  = Math.floor(Math.random() * 10)
//     if(number >  5 ){
//         return res() ;
//     }else {
//         return rej() ;  
//     }
// })

// ans.then(()=>{
//     console.log("resolved");
// }).catch(()=>{
//     console.log("cathched");
// })