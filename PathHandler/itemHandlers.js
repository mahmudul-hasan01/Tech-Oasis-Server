const express = require('express')
const router = express.Router()
const itemModel = require('../Schema/itemSchema')


router.get('/', async (req, res) => {
  try {
    const search = req.query.search;
    console.log(search);
    const regex = new RegExp(search, 'i'); 
    const result = await itemModel.find({ category: regex });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

router.get('/:id', async (req, res) => {
  const data = await itemModel.findById(req.params.id)
  // if (!data) return res.send(404).json({ error: 'data not found' })
  res.send(data)
})

router.post('/', async (req, res) => {
  const data = req.body
  const result = await itemModel.create(data)
  res.status(201).send(result)
})


router.patch('/:id', async (req, res) => {
  const updataUser = await itemModel.findByIdAndUpdate(req.params.id, { name: "Sakib " })
  res.send(updataUser)
})


router.delete('/:id', async (req, res) => {
  const deleteUser = await itemModel.findByIdAndDelete(req.params.id)
  res.send(deleteUser)
})

module.exports = router