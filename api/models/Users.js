const mongoose  = require("mongoose");

const UserScheme = new mongoose.Schema({
    name:{
        type : String
    },
    lastName:{
        type : String
    },
    password:{
        type : String
    },
    email:{
        type : String
    },
    age:{
        type : Number
    },
    country:{
        type : String
    },
    profession:{
       type : String
    },
    description:{
        type : String
    },
    photo:{
        type : String
    },
    language:{
        type : String
    },
    isAdmin:{
        type : Boolean
    },
    role : {
        type : String
    },
    verified :{
        type : Boolean
    }

},
{ 
    timestamps: true,
    versionKey : false 
})


module.exports = mongoose.model("Users", UserScheme)