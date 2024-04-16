const mongoose = require('mongoose')

const addItemSchema = mongoose.Schema({

    productId:String,
    email:String,
    name:String,
    price:Number,
    image:String,    

}, {timestamps:true})

const itemModel = mongoose.model('shopingItem', addItemSchema)

module.exports = itemModel