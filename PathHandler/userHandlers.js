const express = require('express')
const router = express.Router()
const userModel = require('../Schema/userSchema')

// get all user
router.get('/', async (req, res) => {
  const users = await userModel.find({})
  res.send({users})
})

router.get('/role/:email', async (req, res) => {
  const data = await userModel.findOne({ email: req.params.email })
  res.json(data)
})

// get a user
router.get('/:id', async (req, res) => {
  const user = await userModel.findById(req.params.id)
  if(!user) return res.send(404).json({ error: 'user not found'})
  res.send(user)
})

// post user
router.post('/', async (req, res) => {
    const data = req.body
    const result = await userModel.create(data)
    res.status(201).send(result)
})


// put user
router.patch('/admin/:id', async (req, res) => {
  const role = 'admin'
  const updataUser = await userModel.findByIdAndUpdate(req.params.id, 
    {
      role: role
    })
  res.send(updataUser)
})

// delete user
router.delete('/:id', async (req, res) => {
    const deleteUser = await userModel.findByIdAndDelete(req.params.id)
    res.send(deleteUser)
})

module.exports = router