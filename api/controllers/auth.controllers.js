const Users = require("../models/Users");
const AuthServices = require("../services/auth.services");
const { validateToken, generateToken } = require("../utils/auth");

class AuthControllers {

    static async singUp (req,res) {
        try {
            const user = await AuthServices.singUp(req.body)
            if (user) {
                const token = generateToken({ _id: user._id, userName: user.userName, email: user.email })
                const payload = validateToken(token)
                req.user = payload
                res.cookie('token', token, { maxAge: 9000000 })
                res.status(201).send(user)
                console.log("esta es la cookie",res.cookie());
            } else res.sendStatus(400)
        } catch (error) {
            console.log(error);
        }
    }

    static async singIn (req,res) {
        try {
            const user = await Users.findOne({email: req.body.email})
            if (!user) return res.sendStatus(401)
            const passwordHashed = bcrypt.hashSync(req.body.password, user.salt)
            if (passwordHashed === user.password) {
                const token = generateToken({ _id: user._id, userName: user.userName, email: user.email })
                const payload = validateToken(token)
                req.user = payload
                res.cookie('token', token, { maxAge: 9000000 })
                res.status(201).send(req.user)
            } else return res.sendStatus(401)
        } catch (error) {
            console.log(error);
        }
    }

    static async logOut(req, res) {
        res.clearCookie('token')
        res.sendStatus(204)
    }
}

module.exports = AuthControllers