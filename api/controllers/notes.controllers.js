const NotesServices = require("../services/notes.services");

class NotesControllers {

    static async createNote (req,res) {
        try{

            const note = await NotesServices.createNote(req.body)
            return res.status(201).send(note)
        }catch (error){
            console.log(error);
        }
    }

    static async getAll (req,res) {
        try {
            const notes = await NotesServices.getAll()
            return res.status(200).send(notes)
        } catch (error) {
            console.log(error);
        }
    }

    static async findUserNotes (req,res) {
        try {
            const userArrayNotes = await NotesServices.findUserNotes(req.params.id)
            return res.status(200).send(userArrayNotes)
        } catch (error) {
            console.log(error);
        }
    }

    static async updateNote (req,res) {
        try {
            const note = await NotesServices.updateNote(req.body)
            return res.status(201).send(note)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteNote (req,res) {
        try {
            const note = await NotesServices.deleteNote(req.params.id)
            return res.status(200).send(note)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteOneNote (req,res){
        try{
            const notes = NotesServices.deleteOneNote(req.body)


        }catch(error){
            console.log(error);
        }
    }

}

module.exports = NotesControllers