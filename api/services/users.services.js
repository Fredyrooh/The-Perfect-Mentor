const Users = require("../models/Users");

class UserServices {
    static async registerUser(body){
        try{
            const user = new Users(body)
            return await user.save()
        }catch (error){
            console.log(error);
        }
    }

    static async getAll(){
        try{
            return await Users.find
        }catch (error){
            console.log(error);
        }
    }

}

module.exports = UserServices