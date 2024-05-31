// dynamic routing 
   // dynamic routing  
   // how to get data coming from frontend aat backend route

// setting parcel for form 

// setting  up ejs for ejs pages 

// setting up public static files 

const express  = require("express") ; 
const app  = express() ; 
const path  = require("path") ; 
app.use(express.json()) ;
app.use(express.urlencoded({
    extended:  true  
}))
app.set("view engine" , "ejs"); 
app.use(express.static(path.join(__dirname, 'public')));


app.get("/" ,(req,res)=>{
   res.render("index.ejs")
})


// dynamic routing :- 
// jab hamara koi route baar baar repeat ho rha hota hai toh
// jo chiz repeat ho rhi hai uske aage agar : lga dein to 
// voh as a variable treat hoga 
// :username iska mtlb  yeh part dynamic hai 

 app.get("/profile/:username" , (req,res,next)=>{
    res.send(`welcome ${req.params.username}`)
 })


app.listen(1000)