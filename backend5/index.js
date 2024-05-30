 // in this we will learn abouut 
 // form handeling and working with the forms 
 // handle backend process of form and making usre the data coming from any 
 // front end lib , fw, tamplating engines , we stii landle it the backend
 const express = require("express") ;
 const app  = express() ; 

app.use(express.json()) ;
app.use(express.urlencoded({
    extended: true 
}))
// teh dono middleware hai jo hum use karne wale  hai
// we've send a plain text par server ko mila blob(info ka raita)
// which is not directly readable abb is cheej ko handle karna padeg a
// ki hum wapas se redable kar sake 
// yeh dono usi kaam aate hai or i say ki in dono ki wajah se humko hamari required information  mill jati hai 


 app.get("/" , (req,res)=>{
   res.send("about my page ")
 })

 app.listen("2000") ;





 // session and cookies :- 
  

 // hum log kuch bhi data frontend par browser par rakhte skte  hai 
 // and  jab bhi aap kuch bhi request backend par karoge wo frontend per saved data automatically backedn par chala jaayega 


 // aisa data jo apke frontend pe save hai use khete hai cookie

 // client ka server se connect rhena ko kehte hai session 