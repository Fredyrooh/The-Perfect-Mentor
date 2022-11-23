const Notes = require('../models/Notes');
const UserServices = require('./users.services');

class NotesServices {

    static async createNote (body){
        try{
              const newNote = new Notes(body)
              return await newNote.save() 
        }catch (error){
            console.log(error);
        }
    }

    static async getAll(){
        try{
            return await Notes.find({})
        }catch (error){
            console.log(error);
        }
    }

    static async findUserNotes(id){
        try{
            return await Notes.find({idStundent : id})
        }catch (error){
            console.log(error);
        }
    }


    static async updateNote({_id,update}) {
        try {
            return await Notes.findByIdAndUpdate({ _id: _id },{ $set: update })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteNote(id) {
        try {
            return await Notes.deleteOne({ _id: id })
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = NotesServices