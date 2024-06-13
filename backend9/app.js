const cookieParser = require('cookie-parser');
const express = require('express') ;
const app  = express() ; 
const path  = require('path')



app.set("view engine" , " ejs") ;
app.use(express.json()) ;
app.use(express.urlencoded({
    extended : true 
}))
app.use(express.static(path.join(__dirname, 'public'))) ; 
app.use(cookieParser()) ;
// for server side rendering 

app.get('/' , (req,res)=>{
   res.send("heyy ")
})

app.listen(3000) ; 




