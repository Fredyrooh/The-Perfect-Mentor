const Mentees = require("../models/Mentees");


class MenteesServices {
    static async createMentees (body){
        try{
            const mentees = new Mentees(body)
            return await mentees.save()
        }catch (error){
            console.log(error);
        }
    }

    static async findAllMentees (){
        try{
            return await Mentees.find().sort({name: 1})
        }catch (error){
            console.log(error);
        }
    }

    static async modifyMentees ({ _id, mod }){
        try{
            return await Mentees.updateOne({ _id: _id }, { $set: mod })
        }catch (error){
            console.log(error);
        }
    }

    static async deleteMentees (id){
        try{
            return await Mentees.deleteOne({ _id: id })
        }catch (error){
            console.log(error);
        }
    }


}

module.exports = MenteesServices