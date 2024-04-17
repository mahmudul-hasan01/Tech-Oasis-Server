const express = require('express')
const router = express.Router()
const addItemSchema = require('../Schema/AddItemSchema')


// get a data
router.get('/:email', async (req, res) => {
    const data = await addItemSchema.find({ email: req.params.email })
    if (!data) return res.send(404).json({ error: 'data not found' })
    res.send(data)
})

// post data
router.post('/', async (req, res) => {
    const data = req.body
    const result = await addItemSchema.create(data)
    res.status(201).send(result)
})

// delete data
router.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const deletedata = await addItemSchema.findByIdAndDelete(req.params.id)
    res.send(deletedata)
})

module.exports = router