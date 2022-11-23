const express = require('express')
const MentorControllers = require('../controllers/mentor.controllers')
const router = express.Router()

router.post("/create",MentorControllers.createMentor)
router.get('/all', MentorControllers.findAllMentor)
router.put("/modify",MentorControllers.modifyMentor)
router.delete("/delete/:id",MentorControllers.deleteMentor)


module.exports = router