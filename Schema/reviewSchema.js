const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({

    name:String,
    rating:Number,
    details:String,    

})

const reviewModel = mongoose.model('review', reviewSchema)

module.exports = reviewModel