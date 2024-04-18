const express = require('express')
const router = express.Router()
const paymentModel = require('../Schema/paymentSchema')

// get a data
router.get('/:email', async (req, res) => {
  const data = await paymentModel.find({ email: req.params.email })
  if (!data) return res.send(404).json({ error: 'data not found' })
  res.send(data)
})

// post data
router.post('/', async (req, res) => {
  const data = req.body
  const result = await paymentModel.create(data)
  res.status(201).send(result)
})

module.exports = router