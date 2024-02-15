    const tryCatchMiddleware=(handler)=>{
        return async(req,res,next)=>{
// console.log(res)
        
        try{
            await handler(req,res,next)
            
        }
        catch(error){
            console.log(error)
            res.json({
                message:"Something went wrong",
                statue:"Failure",
                error_message:error.message
            })
        }
    }
    }
    module.exports=tryCatchMiddleware