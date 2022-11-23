const express = require('express')
const MeetsControllers = require('../controllers/meets.controllers')
const router = express.Router()

router.post("/create",MeetsControllers.createMeets)
router.get('/all', MeetsControllers.findAllMeets)
router.put("/modify",MeetsControllers.modifyMeets)
router.delete("/delete/:id",MeetsControllers.deleteMeets)


module.exports = router