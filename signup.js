const mongoose=require('mongoose')
let userschema=new mongoose.Schema({
    bookname:{type:String,require:true},
    authorname:{type:String,require:true},
    price:Number
})
let user=mongoose.model("user",userschema)
module.exports=user