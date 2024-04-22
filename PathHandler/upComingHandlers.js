const express = require('express')
const router = express.Router()
const upComingModel = require('../Schema/upComingSchema')


router.get('/', async (req, res) => {
    const Datas = await upComingModel.find({})
    res.send(Datas)
  })

router.get('/:id', async (req, res) => {
    const Data = await upComingModel.findById(req.params.id)
    // if (!Data) return res.send(404).json({ error: 'Data not found' })
    res.send(Data)
  })
  

  router.post('/', async (req, res) => {
    const data = req.body
    const result = await upComingModel.create(data)
    res.status(201).send(result)
  })
  

  router.patch('/:id', async (req, res) => {
    const updataData = await upComingModel.findByIdAndUpdate(req.params.id,)
    res.send(updataData)
  })
  

  router.delete('/:id', async (req, res) => {
    const deleteData = await upComingModel.findByIdAndDelete(req.params.id)
    res.send(deleteData)
  })
  
  module.exports = router