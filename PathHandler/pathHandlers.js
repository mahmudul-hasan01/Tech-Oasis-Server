const express = require('express')
const router = express.Router()
const userModel = require('../UserSchema/userSchema')

// get all todo
router.get('/', async (req, res) => {

})

// get a todo
router.get('/:id', async (req, res) => {

})

// post todo
router.post('/', async (req, res) => {
    const data = req.body
    const result = await userModel.create(data)
    res.status(201).send(result)
})

// post all todo
router.post('/all', async (req, res) => {

})

// put todo
router.put('/:id', async (req, res) => {

})

// delete todo
router.delete('/:id', async (req, res) => {

})

module.exports = router