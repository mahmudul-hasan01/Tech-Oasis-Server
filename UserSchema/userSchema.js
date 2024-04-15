const mongoose = require('mongoose')

const userSchema = mongoose.Schema({


    name: {
        type:String,
        require: true,
    },
    email: String,
    role: String,
    status:{
        type: String,
    },
}, {timestamps:true})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel