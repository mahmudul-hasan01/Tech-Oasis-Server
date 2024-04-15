const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({

    name:String,
    distributorName:String,
    distributorEmail:String,
    category:String,
    rating:Number,
    price:Number,
    datails:String,
    image:String,    

}, {timestamps:true})

const itemModel = mongoose.model('gadget', itemSchema)

module.exports = itemModel