const express  = require("express") ;
const app  = express();
const userModel  = require("./usermodel") ;

app.get("/" ,(req,res)=>{
  res.send("heyy ")
})


app.get("/create" ,  async (req,res)=>{
    let createduser  =  await userModel.create({
        name: "devansh" , 
        email : "devansh@gmail.com" , 
        username : "devansh faujdar"
    })
    res.send(createduser)
})

// to update  a user we need to follow there params  as follows :- 

//   userModel.findOneUpdate(findone, update , {new :true } )
//   findone  = kya find karna hai ,
//   update  = kya update karna hai 

app.get("/update" , async (req, res)=>{
  let updateduser  =  await userModel.findOneAndUpdate({username : "devansh faujdar"}, {name : "devansh singh"} , {new : true })
  res.send(updateduser) ; 
})





app.listen(3000) ; 