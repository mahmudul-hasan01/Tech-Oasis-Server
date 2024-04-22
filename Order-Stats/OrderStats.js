const express = require('express')
const router = express.Router()
const itemModel = require('../Schema/itemSchema')
const userModel = require('../Schema/userSchema')
const upComingModel = require('../Schema/upComingSchema')
const paymentModel = require('../Schema/paymentSchema')


router.get('/', async (req, res) => {
    const result = await paymentModel.aggregate([
        {
            $unwind: '$productItemIds'
        },
        {
            $lookup: {
              from: 'gadgets',
              localField: 'productItemIds',
              foreignField: '_id',
              as: 'productItem'
            }
        },
        // {
        //     $lookup: {
        //         from: 'gadgets',
        //         localField: 'productItemIds',
        //         foreignField: '_id',
        //         as: 'productItem'
        //     }
        // },
        // {
        //     $unwind: '$productItem'
        //   },
    ])

    res.send(result)
})

module.exports = router