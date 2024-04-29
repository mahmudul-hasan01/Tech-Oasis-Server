const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
})

const verifyToken = mongoose.model()