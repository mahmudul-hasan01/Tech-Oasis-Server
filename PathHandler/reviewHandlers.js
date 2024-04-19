const express = require('express')
const router = express.Router()
const reviewModel = require('../Schema/reviewSchema')

// get all review
router.get('/', async (req, res) => {
  const reviews = await reviewModel.find({})
  res.send(reviews)
})

router.post('/', async (req, res) => {
  const data = req.body
  const result = await reviewModel.create(data)
  res.status(201).send(result)
})

module.exports = router