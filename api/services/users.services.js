const Users = require("../models/Users");

class UserServices {

    static async getAll(){
        try{
            return await Users.find({})
        }catch (error){
            console.log(error);
        }
    }

    static async findById(id){
        try{
            return await Users.find({_id:id})
        }catch (error){
            console.log(error);
        }
    }

    static async updateUser({_id,update}) {
        try {
            return await Users.findByIdAndUpdate({ _id: _id },{ $set: update })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteUser(id) {
        try {
            return await Users.deleteOne({ _id: id })
        } catch (error) {
            console.log(error)
        }
    }



}

module.exports = UserServices