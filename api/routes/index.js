const express = require("express")
const Users = require("../models/Users")
const router = express.Router()
const user = require('./user')
const auth = require('./auth')
const target = require('./targets')
const note = require('./notes')

router.use('/auth',auth)
router.use('/user',user)
router.use('/auth',auth)
router.use('/target',target)
router.use('/note',note)

module.exports = router