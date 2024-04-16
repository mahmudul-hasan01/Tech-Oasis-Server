const express = require('express')
const router = express.Router()
const reviewModel = require('../Schema/reviewSchema')

// get all user
router.get('/', async (req, res) => {
  const users = await reviewModel.find({})
  res.send(users)
})

module.exports = router