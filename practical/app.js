const express = require("express");
const app = express();
const userModel = require("./models/user");
const  bcrypt = require('bcrypt') ; 
const cookieParser = require('cookie-parser');  // Only declared once
const path = require('path');
const jwt = require('jsonwebtoken') ;
const { log } = require("console");



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());  // Initialized once

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/create', async (req, res) => {
    let { username, email, password, age } = req.body;
    bcrypt.genSalt(10 ,(err,salt)=>{
        bcrypt.hash(password,salt, async (err,hash)=>{
            let createdUser = await userModel.create({
                username,
                email,
                password: hash ,
                age
            })
            // login functionality 
            let token =  jwt.sign({email} ,"secret") ;
            res.cookie("token",token); 
            res.send(createdUser)
        })
    })
});

app.get("/login", (req,res)=>{
    res.render('login')
})

app.get("login", async (req,res)=>{
    let  user = await userModel.findOne({email : req.body.email}) ;
    if(!user) return res.send("something went wrong") ;

    bcrypt.compare(req.body.password , user.password , (err,result)=>{
    if(result)   res.send("yes you can login")
        
    })
})


app.get("/logout" , (req,res)=>{
    res.cookie("token","");
    res.redirect("/"); 
})

app.listen(3000);
