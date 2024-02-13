const express=require('express')
const mongoose=require("mongoose")
const app=express()
const port = 4000;
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/todo")
    .then(() => console.log("mongodb  connected"))
    .catch((e) => console.log("error found", e))
app.listen(port,()=>{
  console.log(`Server is running on ${port}`)
})




const authUser=require('./Router/userRouter')
app.use('/',authUser)
