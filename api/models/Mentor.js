const mongoose  = require("mongoose");

const MentorScheme = new mongoose.Schema({
    userId:{
        type : String
    },
    mentees : {
        type : Array
    },
    skill :{
        type : String
    },
    menteesNote : {
        type : String
    },
    meets : {
        type : Array
    }

},
{ 
    timestamps: true,
    versionKey : false 
})


module.exports = mongoose.model("Mentor", MentorScheme)