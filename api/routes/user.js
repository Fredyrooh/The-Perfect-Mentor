const express = require('express')
const UserControllers = require('../controllers/user.controllers')
const router = express.Router()

router.post("/register",UserControllers.registerUsers)
// router.get('/all', UserControllers.getAll)
// router.delete('/delete', UserControllers.delete)

module.exports = router