const express = require('express')
const router = express.Router()
const itemModel = require('../Schema/itemSchema')
const userModel = require('../Schema/userSchema')
const upComingModel = require('../Schema/upComingSchema')
const paymentModel = require('../Schema/paymentSchema')


router.get('/', async (req, res) => {
    const item = await itemModel.estimatedDocumentCount()
    const user = await userModel.estimatedDocumentCount()
    const upComing = await upComingModel.estimatedDocumentCount()

    const result = await paymentModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$price' }
            }
        }
    ])
    const revenue = result.length > 0 ? result[0].totalRevenue : 0

    res.send({item, user, upComing, revenue})
})

module.exports = router