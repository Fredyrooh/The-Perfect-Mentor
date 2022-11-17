const express = require("express")
const Users = require("../models/Users")
const router = express.Router()

router.post("/register",(req,res)=>{
    const user = new Users(req.body)
    user.save()
    res.status(201).send(user)
})

module.exports = router