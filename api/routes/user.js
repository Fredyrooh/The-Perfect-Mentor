const express = require('express')
const UserControllers = require('../controllers/user.controllers')
const router = express.Router()

router.get('/all', UserControllers.getAll)
router.get('/find/:id', UserControllers.findById)
router.put('/updateuser',UserControllers.updateUser)
router.delete('/delete/:id', UserControllers.deleteUser)

module.exports = router 