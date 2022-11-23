const Targets = require("../models/Targets");
const TargetsServices = require("../services/target.services");

class TargetsControllers {

    static async createTarget (req,res) {
        try{
            const target = await TargetsServices.createTarget(req.body)
            return res.status(201).send(target)
        }catch (error){
            console.log(error);
        }
    }

    static async getAll (req,res) {
        try {
            const targets = await TargetsServices.getAll()
            return res.status(200).send(targets)
        } catch (error) {
            console.log(error);
        }
    }

    static async findById (req,res) {
        try {
            const target = await TargetsServices.findById(req.params.id)
            return res.status(200).send(target)
        } catch (error) {
            console.log(error);
        }
    }

    static async updateTarget (req,res) {
        try {
            const target = await TargetsServices.updateTarget(req.body)
            return res.status(201).send(target)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteTarget (req,res) {
        try {
            const target = await TargetsServices.deleteTarget(req.params.id)
            return res.status(200).send(target)
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = TargetsControllers