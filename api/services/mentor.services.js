const Mentor = require("../models/Mentor");


class MentorServices {
    static async createMentor (body){
        try{
            const mentor = new Mentor(body)
            return await mentor.save()
        }catch (error){
            console.log(error);
        }
    }

    static async findAllMentor(){
        try{
            return await Mentor.find().sort({name: 1})
        }catch (error){
            console.log(error);
        }
    }

    static async modifyMentor ({ _id, mod }){
        try{
            return await Mentor.updateOne({ _id: _id }, { $set: mod })
        }catch (error){
            console.log(error);
        }
    }

    static async deleteMentor (id){
        try{
            return await Mentor.deleteOne({ _id: id })
        }catch (error){
            console.log(error);
        }
    }


}

module.exports = MentorServices