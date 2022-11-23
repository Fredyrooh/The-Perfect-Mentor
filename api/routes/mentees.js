const express = require('express')
const MenteesControllers = require('../controllers/mentees.controllers')
const router = express.Router()

router.post("/create",MenteesControllers.createMentees)
router.get('/all', MenteesControllers.findAllMentees)
router.put("/modify",MenteesControllers.modifyMentees)
router.delete("/delete/:id",MenteesControllers.deleteMentees)


module.exports = router