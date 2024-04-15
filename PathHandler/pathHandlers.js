const express = require('express')
const router = express.Router()
const userModel = require('../UserSchema/userSchema')

// get all user
router.get('/', async (req, res) => {
  const users = await userModel.find({})
  res.send(users)
})

// get a user
router.get('/:id', async (req, res) => {

})

// post user
router.post('/', async (req, res) => {
    const data = req.body
    const result = await userModel.create(data)
    res.status(201).send(result)
})

// post all user
router.post('/all', async (req, res) => {

})

// put user
router.put('/:id', async (req, res) => {

})

// delete user
router.delete('/:id', async (req, res) => {

})

module.exports = router