var mdb=require('mongoose')
var userSchema=mdb.Schema({
    firstName:String,
    lastName:string
})
var user_schema=mdb.model("sampleuser",userSchema)
module.exports=user_schema