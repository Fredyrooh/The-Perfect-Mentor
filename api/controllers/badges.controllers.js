const BadgesServices = require("../services/badges.services");


class BadgesControllers {

    static async createBadges (req,res) {
        try {
                const badge = await BadgesServices.createBadge(req.body)
                res.status(201).send(badge)
        } catch (error) {
            console.log(error);
        }
    }

    static async findAllBadges (req,res) {
        try {
                const badge = await BadgesServices.findAllBadge()
                return res.status(200).send(badge)
        } catch (error) {
            console.log(error);
        }
    }

    static async modifyBadges (req,res) {
        try {
                const badge = await BadgesServices.modifyBadge(req.body)
                return res.status(201).send(badge)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteBadges (req,res) {
        try {
                const badge = await BadgesServices.deleteBadge(req.params.id)
               return res.status(204).send(badge)
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = BadgesControllers