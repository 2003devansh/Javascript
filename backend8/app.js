

const cookieParser = require("cookie-parser");
const express  = require("express") ;
const app  = express() ;
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken') ;


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

app.get("/reading" , (req,res)=>{
    let token = jwt.sign({
        email : "devanhs@gmail.com"
    }, "secret") ;
    res.cookie("token", token ) ;
    console.log(token);
    res.send("heyy listen to this")

})

app.listen(3000)