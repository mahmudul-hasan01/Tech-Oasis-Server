const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')


router.post('/', async (req, res) => {
    const user = req.body
    // console.log('I need a new jwt', user)
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '365d',
    })
    res
        .cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true })
})

module.exports = router