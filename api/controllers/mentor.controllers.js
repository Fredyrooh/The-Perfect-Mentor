const MentorServices = require("../services/mentor.services");


class MentorControllers {

    static async createMentor (req,res) {
        try {
                const mentor = await MentorServices.createMentor(req.body)
                res.status(201).send(mentor)
        } catch (error) {
            console.log(error);
        }
    }

    static async findAllMentor  (req,res) {
        try {
                const mentor = await MentorServices.findAllMentor()
                return res.status(200).send(mentor)
        } catch (error) {
            console.log(error);
        }
    }

    static async modifyMentor (req,res) {
        try {
                const mentor = await MentorServices.modifyMentor(req.body)
                return res.status(201).send(mentor)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteMentor (req,res) {
        try {
                const mentor = await MentorServices.deleteMentor(req.params.id)
               return res.status(204).send(mentor)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = MentorControllers