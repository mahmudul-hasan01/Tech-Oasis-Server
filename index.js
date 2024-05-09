const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const userHandler = require('./PathHandler/userHandlers')
const itemHandler = require('./PathHandler/itemHandlers')
const reviewHandler = require('./PathHandler/reviewHandlers')
const upComingHandler = require('./PathHandler/upComingHandlers')
const addItemHandler = require('./PathHandler/AddItemHandlers')
const paymentIntentHanler = require('./PathHandler/paymentIntentHandlers')
const paymentHanler = require('./PathHandler/paymentHandlers')
const adminStats = require('./Admin-Stats/AdminStats')
const orderStats = require('./Order-Stats/OrderStats')
const verifyTokenPath = require('./PathHandler/verifyTokenPath')
const port = process.env.PORT || 5000


// app.use(
//   cors({
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//     optionsSuccessStatus: 204,
//   })
// );

app.use(cors({
  origin: [
    'http://localhost:5173',
    // 'https://tech-oasis.web.app'
  ],
  credentials: true
}))
app.use(express.json())


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uoehazd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// 'mongodb://localhost/Tech-Oasis'

mongoose.connect(uri, {dbName: 'Tech-Oasis'}, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Mongoose successfully Connect'))
  .catch((err) => {
    console.log(err)
  })

app.use('/users', userHandler)
app.use('/reviews', reviewHandler)
app.use('/gadgets', itemHandler)
app.use('/upcoming', upComingHandler)
app.use('/shopingItem', addItemHandler)
app.use('/payment-intent', paymentIntentHanler)
app.use('/payment', paymentHanler)
app.use('/admin-stats', adminStats)
app.use('/order-stats', orderStats)
app.use('/jwt', verifyTokenPath)








app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})