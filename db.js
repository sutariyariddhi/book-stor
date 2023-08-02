const mongoose=require('mongoose')
const connect=async()=>{
    await mongoose.connect("mongodb+srv://sutariyariddhi87:book@cluster0.8nuj0cz.mongodb.net/?retryWrites=true&w=majority")
    console.log("connected");
};
module.exports=connect