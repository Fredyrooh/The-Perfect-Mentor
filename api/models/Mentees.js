const mongoose  = require("mongoose");

const MenteesScheme = new mongoose.Schema({
    userId:{
        type: String
    },
    mentor:{
        type : Array
    },
    objectives:{
        type : String
    },
    badges:{
        type : Array
    }

},
{ 
    timestamps: true,
    versionKey : false 
})


module.exports = mongoose.model("Mentees", MenteesScheme)