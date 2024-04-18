const express = require('express')
const router = express.Router()
const reviewModel = require('../Schema/reviewSchema')

// get all review
router.get('/', async (req, res) => {
  const reviews = await reviewModel.find({})
  res.send(reviews)
})

module.exports = router