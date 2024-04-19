const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    price: Number,
    email: String,
    status: String,
    transactionId: String,
    shopingIds: Array,
    productItemIds: Array,

})

const paymentModel = mongoose.model('payment', paymentSchema)

module.exports = paymentModel