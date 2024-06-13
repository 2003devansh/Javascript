

const cookieParser = require("cookie-parser");
const express  = require("express") ;
const app  = express() ;
const bcrypt = require('bcrypt');

app.use(cookieParser()) ;


app.get("/" , (req,res)=>{
    res.cookie("name " , "devansh")
    res.send("heyy")
  
})

app.get("/read" , function(req,res){
   
    console.log(req.cookies);
    res.send("read page")
})

app.get("/im" , (req,res)=>{

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("hi there", salt, function(err, hash) {
           console.log(hash);
        });
    });
    // yeh password ko hash mai convert kar dega 
    
})

app.listen(3000)