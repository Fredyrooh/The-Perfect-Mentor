const Users = require("../models/Users");
const { generateToken } = require("../utils/auth");

class AuthServices {
    static async singUp(body){
        try{
            const user = new Users(body)
            return await user.save()
        }catch (error){
            console.log(error);
        }
    }

    static async genAndValidateToken(res){
        try{
            
        }catch(error){
            console.log(error);
        }
    }

}

module.exports = AuthServices