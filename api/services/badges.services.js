const Badges = require("../models/Badges");


class BadgesServices {
    static async createBadge (body){
        try{
            const badge = new Badges(body)
            return await badge.save()
        }catch (error){
            console.log(error);
        }
    }

    static async findAllBadge (){
        try{
            return await Badges.find().sort({name: 1})
        }catch (error){
            console.log(error);
        }
    }

    static async modifyBadge ({ _id, mod }){
        try{
            return await Badges.updateOne({ _id: _id }, { $set: mod })
        }catch (error){
            console.log(error);
        }
    }

    static async deleteBadge (id){
        try{
            return await Badges.deleteOne({ _id: id })
        }catch (error){
            console.log(error);
        }
    }


}

module.exports = BadgesServices