const mongoose = require('mongoose')

const userSchema = mongoose.Schema({


    name: {
        type:String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    role: {
        type: String,
        require: true,
    },
    status:{
        type: String,
        require: true,
    },
}, {timestamps:true})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel