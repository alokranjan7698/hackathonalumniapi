const mongoose=require("mongoose");
const mongodbConnection=async()=>{
    try{
        const connection=await mongoose.connect("mongodb+srv://pritamsohalumni:pritam123@cluster0.h88fcv2.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongodb Database is connected to ${connection.connection.host}`);
         
    }catch(error){
        console.log(`Error:${error.message}`);
    }
}
module.exports=mongodbConnection
