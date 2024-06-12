const express  = require("express") ;
const app  = express() ;


app.get("/" , (req,res)=>{
    res.send("heyy")
})

app.listen(3000)