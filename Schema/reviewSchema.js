const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({

    name:String,
    rating:Number,
    details:String,    

}, {timestamps:true})

const reviewModel = mongoose.model('review', reviewSchema)

module.exports = reviewModel