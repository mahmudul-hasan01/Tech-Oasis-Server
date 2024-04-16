const mongoose = require('mongoose')

const upComingSchema = mongoose.Schema({

    name:String,
    distributorName:String,
    distributorEmail:String,
    category:String,
    rating:Number,
    price:Number,
    datails:String,
    image:String,    

}, {timestamps:true})

const upComingModel = mongoose.model('upComing', upComingSchema)

module.exports = upComingModel