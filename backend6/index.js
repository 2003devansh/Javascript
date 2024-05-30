// dynamic routing 
   // dynamic routing  
   // how to get data coming from frontend aat backend route

// setting parcel for form 

// setting  up ejs for ejs pages 

// setting up public static files 

const express  = require("express") ; 
const app  = express() ; 

app.use(express.json()) ;
app.use(express.urlencoded({
    extended:  true  
}))
app.set("view engine" , "ejs")

app.get("/" ,(req,res)=>{
   res.render("eppy boiii")
})

app.listen(1000)