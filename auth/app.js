const express  = require("express") ;
const app = express() ;

app.get("/" , ()=>{
    res.send("hey")
})

app.listen(3000)  ; 