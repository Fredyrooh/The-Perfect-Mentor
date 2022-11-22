const express = require('express')
const TargetsControllers = require('../controllers/targets.controllers')
const router = express.Router()

router.post('/create',TargetsControllers.createTarget)
router.get('/all', TargetsControllers.getAll)
router.get('/find/:id', TargetsControllers.findById)
router.put('/update',TargetsControllers.updateTarget)
router.delete('/delete/:id', TargetsControllers.deleteTarget)


module.exports = router