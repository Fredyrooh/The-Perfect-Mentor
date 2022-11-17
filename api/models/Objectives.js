const mongoose  = require("mongoose");

const ObjectivesScheme = new mongoose.Schema({
    name:{
        type : String
    },  
    description:{
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


module.exports = mongoose.model("Objectives", ObjectivesScheme)