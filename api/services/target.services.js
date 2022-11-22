const Targets = require("../models/Targets");

class TargetsServices {

    static async createTarget (body){
        try{
            const target = new Targets(body)
            return await target.save()
        }catch (error){
            console.log(error);
        }
    }

    static async getAll(){
        try{
            return await Targets.find({})
        }catch (error){
            console.log(error);
        }
    }

    static async findById(id){
        try{
            return await Targets.find({_id:id})
        }catch (error){
            console.log(error);
        }
    }

    static async updateTarget({_id,update}) {
        try {
            return await Targets.findByIdAndUpdate({ _id: _id },{ $set: update })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteTarget(id) {
        try {
            return await Targets.deleteOne({ _id: id })
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = TargetsServices