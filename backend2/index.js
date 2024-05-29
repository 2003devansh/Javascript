const fs  = require('fs') ;

// it creates a file
fs.writeFile("heyy.text" , "hello everyone" , function(err){
    if(err){
        console.error("error");
    }else{
        console.log("done");
    }
})


// appendfile :--- yeh file mai append karta hai jo humne  bnayi hai 

fs.appendFile("heyy.text" ,"mai toh accha hu " , (err)=>{
if(err){
    console.error("error")
}else{
    console.log("done again");
}
})
// node js core  mai jo install hoke aata hhai voh hota module , 
// npm se download karte hai vo hota hai  package 