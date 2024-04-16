const express = require('express')
const router = express.Router()
const addItemSchema = require('../Schema/AddItemSchema')

// get all data
router.get('/', async (req, res) => {
    const users = await userModel.find({})
    res.send(users)
})

// get a user
router.get('/:id', async (req, res) => {
    const user = await userModel.findById(req.params.id)
    if (!user) return res.send(404).json({ error: 'user not found' })
    res.send(user)
})

// post data
router.post('/', async (req, res) => {
    const data = req.body
    const result = await addItemSchema.create(data)
    res.status(201).send(result)
})


//   // put data
//   router.patch('/:id', async (req, res) => {
//     const updatadata = await addItemSchema.findByIdAndUpdate(req.params.id)
//     res.send(updatadata)
//   })

//   // delete data
//   router.delete('/:id', async (req, res) => {
//       const deletedata = await addItemSchema.findByIdAndDelete(req.params.id)
//       res.send(deletedata)
//   })

module.exports = router