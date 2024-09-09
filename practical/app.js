const express = require("express");
const app = express();
const userModel = require("./models/user");
const  bcrypt = require('bcrypt') ; 
const cookieParser = require('cookie-parser');  // Only declared once
const path = require('path');
const jwt = require('jsonwebtoken') ;



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

app.listen(3000);
