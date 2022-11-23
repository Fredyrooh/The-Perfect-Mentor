const UserServices = require("../services/users.services");

class UserControllers {



    static async getAll (req,res) {
        try {
            const users = await UserServices.getAll()
            return res.status(200).send(users)
        } catch (error) {
            console.log(error);
        }
    }

    static async findById (req,res) {
        try {
            const user = await UserServices.findById(req.params.id)
            return res.status(200).send(user)
        } catch (error) {
            console.log(error);
        }
    }

    static async updateUser (req,res) {
        try {
            const user = await UserServices.updateUser(req.body)
            return res.status(201).send(user)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteUser (req,res) {
        try {
            const user = await UserServices.deleteUser(req.params.id)
            return res.status(200).send(user)
        } catch (error) {
            console.log(error);
        }
    }
    


}

module.exports = UserControllers