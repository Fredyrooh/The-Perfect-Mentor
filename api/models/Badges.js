const mongoose  = require("mongoose");

const BadgesScheme = new mongoose.Schema({
    name:{
        type : String
    },  
    description:{
        type : String
    },
    img:{
        type : String
    }

},
{ 
    timestamps: true,
    versionKey : false 
})


module.exports = mongoose.model("Badges", BadgesScheme)