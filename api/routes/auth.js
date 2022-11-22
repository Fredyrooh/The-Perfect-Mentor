const express = require('express')
const AuthControllers = require('../controllers/auth.controllers')
const { validateAuth } = require('../middlewares/auth')
const router = express.Router()

router.get('/me', validateAuth, (req, res) => res.send(req.user))
router.post('/singup',AuthControllers.singUp)
router.post('/singin',AuthControllers.singIn)
router.post('/logout',AuthControllers.logOut)

module.exports = router