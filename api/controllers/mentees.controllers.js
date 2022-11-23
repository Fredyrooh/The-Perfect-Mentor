const MenteesServices = require("../services/mentees.services");


class MenteesControllers {

    static async createMentees (req,res) {
        try {
                const mentees = await MenteesServices.createMentees(req.body)
                res.status(201).send(mentees)
        } catch (error) {
            console.log(error);
        }
    }

    static async findAllMentees  (req,res) {
        try {
                const mentees = await MenteesServices.findAllMentees()
                return res.status(200).send(mentees)
        } catch (error) {
            console.log(error);
        }
    }

    static async modifyMentees (req,res) {
        try {
                const mentees = await MenteesServices.modifyMentees(req.body)
                return res.status(201).send(mentees)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteMentees (req,res) {
        try {
                const mentee = await MenteesServices.deleteMentees(req.params.id)
               return res.status(204).send(mentee)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = MenteesControllers