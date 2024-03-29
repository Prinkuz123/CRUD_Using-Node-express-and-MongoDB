const express=require("express")
const router=express.Router()
const user=require("../Controller/userController")
const tryCatch=require('../Middleware/tryCatch')

router.route("/user/query")
.get(tryCatch(user.getUserByQuery))

router.route("/user")
.post(tryCatch(user.createUser))
.get(tryCatch(user.getAllUsers))

router.route("/user/:id")
.put(tryCatch(user.updateUser))
.delete(tryCatch(user.deleteUser))









module.exports=router