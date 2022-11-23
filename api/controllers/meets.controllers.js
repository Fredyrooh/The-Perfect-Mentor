const MeetsServices = require("../services/meets.services");


class MeetsControllers {

    static async createMeets (req,res) {
        try {
                const meet = await MeetsServices.createMeets(req.body)
                res.status(201).send(meet)
        } catch (error) {
            console.log(error);
        }
    }

    static async findAllMeets  (req,res) {
        try {
                const meets = await MeetsServices.findAllMeets()
                return res.status(200).send(meets)
        } catch (error) {
            console.log(error);
        }
    }

    static async modifyMeets (req,res) {
        try {
                const meets = await MeetsServices.modifyMeets(req.body)
                return res.status(201).send(meets)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteMeets (req,res) {
        try {
                const meet = await MeetsServices.deleteMeets(req.params.id)
               return res.status(204).send(meet)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = MeetsControllers