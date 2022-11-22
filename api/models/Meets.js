const mongoose  = require("mongoose");

const MeetsScheme = new mongoose.Schema({
    name:{
        type : String
    },
    date:{
        type : String
    },
    
    description:{
        type : String
    },
    url:{
        type : String
    },
    participants:{
        type : String
    },
    done:{
        type : Boolean
    }

},
{ 
    timestamps: true,
    versionKey : false 
})


module.exports = mongoose.model("Meets", MeetsScheme)