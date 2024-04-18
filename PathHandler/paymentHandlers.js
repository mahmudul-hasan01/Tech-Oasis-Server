const express = require('express')
const router = express.Router()
const paymentModel = require('../Schema/paymentSchema')


  // post data
  router.post('/', async (req, res) => {
      const data = req.body
      const result = await paymentModel.create(data)
      res.status(201).send(result)
  })

module.exports = router