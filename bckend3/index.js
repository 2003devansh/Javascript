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


 //middleware ka code :- 
 // phele yeh  chalega fir rouutes

app.use((req,res,next)=>{
    console.log("middlewae chala");
    next() ; 
})

 //creation of route
 app.get("/" , (req, res)=>{
    res.send("hello world")
 })
 // (req, res)  yeh ek middleware hai 

 // middleware :- kisi bhi route ko chalane se phele hum koi operation perform karna chate hai 
 // to middleware use aata hai 


 // error handeling 
 app.use((err, req ,res ,next)=>{
    console.error(err.stack)
    res.satus(500).send("something broke !!")
 })

 app.listen(3000)