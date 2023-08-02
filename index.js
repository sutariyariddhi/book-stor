const express=require('express');
const user = require('./signup');
const connect = require('./db')
const app=express();
app.use(express.json());
app.get('/home', async(req,res)=>{
    let data= await user.find()
    res.send(data)
})
app.post('/signup',async (req,res)=>{
    user.create(req.body)
    await user.create(req.body)
    res.send("done")
   console.log(data);
})
app.patch("/:id", async (req,res)=>{
    await user.findByIdAndUpdate(req.params.id,req.body)
    res.send("updated")
})
app.delete("/:id", async (req,res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.send("deleted");
})
app.listen(9080,()=>{
    console.log("listning on port 9080");
    connect();
})
module.export=connect