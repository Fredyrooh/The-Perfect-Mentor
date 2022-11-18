const mongoose  = require("mongoose");
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type : String
    },
    lastName:{
        type : String
    },
    password:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
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
        type : Boolean,
        default: false
    },
    role : {
        type : String
    },
    verified :{
        type : Boolean,
        default: false
    },
    salt :{
        type: String
    }
},
{ 
    timestamps: true,
    versionKey : false 
})

UserSchema.pre('save', async function () {
    this.salt = bcrypt.genSaltSync()
    return (this.password = await bcrypt.hash(this.password, this.salt))
})


module.exports = mongoose.model("Users", UserSchema)