const UserServices = require("../services/users.services");

class UserControllers {

    static async registerUsers (req,res) {
        try {
                const user = await UserServices.registerUser(req.body)
                res.status(201).send(user)
        } catch (error) {
            console.log(error);
        }
    }

    static async getAll (req,res) {
        try {
                const users = await UserServices.getAll()
                res.status(200).send(UserServices)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = UserControllers