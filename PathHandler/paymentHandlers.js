const express = require('express')
const router = express.Router()
const paymentModel = require('../Schema/paymentSchema')
const itemModel = require('../Schema/AddItemSchema')



// get a data
router.get('/:email', async (req, res) => {
  const payment =await paymentModel.estimatedDocumentCount()
  const data = await paymentModel.find({ email: req.params.email })
  if (!data) return res.send(404).json({ error: 'data not found' })
  res.send({data,payment})
})

// post data
router.post('/', async (req, res) => {
  const payment = req.body
  const result = await paymentModel.create(payment)

  const deleteResult = await itemModel.deleteMany({email: payment.email})

  console.log(result, deleteResult);
  res.send({ result})
})

module.exports = router