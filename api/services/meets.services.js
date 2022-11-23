const Meets = require("../models/Meets");


class MeetsServices {
    static async createMeets (body){
        try{
            const meet = new Meets(body)
            return await meet.save()
        }catch (error){
            console.log(error);
        }
    }

    static async findAllMeets (){
        try{
            return await Meets.find().sort({name: 1})
        }catch (error){
            console.log(error);
        }
    }

    static async modifyMeets ({ _id, mod }){
        try{
            return await Meets.updateOne({ _id: _id }, { $set: mod })
        }catch (error){
            console.log(error);
        }
    }

    static async deleteMeets (id){
        try{
            return await Meets.deleteOne({ _id: id })
        }catch (error){
            console.log(error);
        }
    }


}

module.exports = MeetsServices