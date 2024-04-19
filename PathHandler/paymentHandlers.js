const express = require('express')
const router = express.Router()
const paymentModel = require('../Schema/paymentSchema')
const { ObjectId } = require('mongoose');


// get a data
router.get('/:email', async (req, res) => {
  const data = await paymentModel.find({ email: req.params.email })
  if (!data) return res.send(404).json({ error: 'data not found' })
  res.send(data)
})

// post data
router.post('/', async (req, res) => {
  const payment = req.body
  const result = await paymentModel.create(payment)
  console.log(payment);
  // const query = {
  //   _id: {
  //     $in: payment.shopingIds.map(id => new ObjectId(id))
  //   }
  // }
  // const shoppingIds = payment.shopingIds.map(id => new ObjectId(id));
  // new mongoose.Types.ObjectId()
  const query = {
    _id: { $in:  payment.shopingIds.map(id => new ObjectId(id)) }
  };

  const deleteResult = await paymentModel.deleteMany(query)
  console.log(query, deleteResult);
  res.send({ result, deleteResult })
  // res.status(201).send(result)
})

module.exports = router