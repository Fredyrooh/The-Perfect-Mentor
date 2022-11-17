const mongoose  = require("mongoose");

const NotesScheme = new mongoose.Schema({
    idStundent:{
        type : String
    },  
    notes:{
        type : Array
    }
},
{ 
    timestamps: true,
    versionKey : false 
})


module.exports = mongoose.model("Notes", NotesScheme)