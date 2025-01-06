var express=require('express')
var app=express()
var path=require('path')
var mdp=require('mongoose')
var cors=require('cors')
var User=require('./models/users')
const PORT=3001
app.use(express.json())
app.use(cors())
mdp.connect("mongodb+srv://narendirans:15-Sep-04@cluster0.yqqvewa.mongodb.net/").then(() => {
    console.log("Mongodb connection succesful")
}).catch(() => {
    console.log("check your connection string")
});
app.get('/',(req,res)=>{
    res.send("welcome to backend server");
})
app.get('/static',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/signup',(req,res)=>{
   // var {}=//req.body
   console.log(req.body);
   var{firstName,lastName,email}=req.body
   console.log(firstName,lastName,email);
    try{
        var newUser=new User({
            firstName:firstName,
            lastName:lastName,
            email:email
        })
        newUser.save()
        console.log("user added succesfully");
        res.status(200).send("user added succesfully");
    }
    catch{
        console.log(err);
    }
    res.send("hello")
})
app.get('/getsignup',async(req,res)=>{
    try{
         var allSignUpRecords=await User.find()
         res.json(allSignUpRecords)
         console.log("All data fetched");
    }
    catch{
        console.log(err);
        res.send(err);
    }
})
app.post('/login',async(req,res)=>{
    var {email,password}=req.body
    try{
        var existingUser=await User.findOne({email:email})
        console.log(existingUser)
        res.json({message:"login successful",isLoggedIn:true})
    }
    catch(err){
        console.log("login failed");
    }
})
app.listen(PORT,()=>{
    console.log(`backend server started\n Url:http://localhost:${PORT}`)
})