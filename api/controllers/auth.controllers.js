const UserServices = require("../services/users.services");

class AuthControllers {

    static async singUp (req,res) {
        try {
            const user = await UserServices.registerUser(req.body)
            return res.status(201).send(user)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AuthControllers