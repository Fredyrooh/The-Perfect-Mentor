const express = require('express')
const NotesControllers = require('../controllers/notes.controllers')
const router = express.Router()

router.post('/create',NotesControllers.createNote)
router.get('/all', NotesControllers.getAll)
router.get('/find/:id', NotesControllers.findUserNotes)
// ejemplo para tunder {
//   "_id":"637bc7d06d3d350afd0e8df4",
//   "update" : {
//     "title":"le cambie el titulo"
//   }
// }
router.put('/update',NotesControllers.updateNote)
router.put('/deletenote',NotesControllers.deleteOneNote)
router.delete('/delete/:id', NotesControllers.deleteNote)


module.exports = router