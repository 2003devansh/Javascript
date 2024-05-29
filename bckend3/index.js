// dependices:-  packages and packages ki dependencies ,

// devdependencies :- aise packages jo sirf devolpment mai kaam ayenge
// prr deploy hone ke baad voh useless ho jayengi  

// Intoduction to express :- 
// express is a npm package ha i 
// aur yeh framework hai
 

// difference between framework and library 
 // {framework ek mai ek flow  hota hia  } 
 // express js manages everything  from receiving the request to giving the response 


 const express  = require("express")
 const app  = express() ; 
 app.get("/" , (req, res)=>{
    res.send("hello world")
 })

 app.listen(3000)