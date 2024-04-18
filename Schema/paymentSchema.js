const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    price: Number,
})

const paymentModel = mongoose.model('payment', paymentSchema)

module.exports = paymentModel