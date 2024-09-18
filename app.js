const express=require("express")
const app=express();
const PORT=8000;


app.get("/",(req,res)=>{
    res.json({message:"Hello From Server"})
})


app.get("/home",(req,res)=>{
    res.json({message:"Hello From Home"})
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})