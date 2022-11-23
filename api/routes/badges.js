const express = require('express')
const BadgesControllers = require('../controllers/badges.controllers')
const router = express.Router()

router.post("/create",BadgesControllers.createBadges)
router.get('/all', BadgesControllers.findAllBadges)
router.put("/modify",BadgesControllers.modifyBadges)
router.delete("/delete/:id",BadgesControllers.deleteBadges)


module.exports = router