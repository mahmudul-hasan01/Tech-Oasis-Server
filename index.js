const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const userHandler = require('./PathHandler/userHandlers')
const itemHandler =require('./PathHandler/itemHandlers')
const reviewHandler = require('./PathHandler/reviewHandlers')
const upComingHandler = require('./PathHandler/upComingHandlers')
const addItemHandler = require('./PathHandler/AddItemHandlers')
const port = process.env.PORT || 5000


app.use(cors({
  origin: [ 
    'http://localhost:5173',
    // 'https://tech-oasis.web.app'
  ],
  credentials: true
}))
app.use(express.json())


mongoose.connect('mongodb://localhost/Tech-Oasis', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Mongoose successfully Connect'))
  .catch((err) => {
    console.log(err)
  })

  app.use('/users', userHandler)
  app.use('/reviews',reviewHandler)
  app.use('/gadgets',itemHandler)
  app.use('/upcoming',upComingHandler)
  app.use('/shopingItem',addItemHandler)


// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uoehazd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {

//     const usersCollection = client.db('Tech-Oasis-DB').collection('user')
//     const gadgetsCollection = client.db('Tech-Oasis-DB').collection('gadgets')
//     const reviewsCollection = client.db('Tech-Oasis-DB').collection('reviews')

//     // user 

//     app.get('/users', async (req, res) => {
//       const result = await usersCollection.find().toArray()
//       res.send(result)
//     })

//     app.post('/users', async (req, res) => {
//       const user = req.body
//       const query = { email: user.email }
//       const existingUser = await usersCollection.findOne(query)
//       if (existingUser) {
//         return res.send({ message: 'user already exists', insertedId: null })
//       }
//       const result = await usersCollection.insertOne(user)
//       res.send(result)
//     })

//     // Gadgets

//     app.get('/allGadgets', async (req, res) => {
//       const result = await gadgetsCollection.find().toArray()
//       res.send(result)
//     })

//     app.get('/gadgets', async (req, res) => {
//       const search = req.query.search
//       const query = {
//         category: { $regex: search, $options: 'i' }
//       }
//       const result = await gadgetsCollection.find(query).toArray()
//       res.send(result)
//     })

//     app.get('/gadget/:id', async (req, res) => {
//       const id = req.params.id
//       const query = { _id: new ObjectId(id) }
//       const result = await gadgetsCollection.find(query).toArray()
//       res.send(result)
//     })

//     app.post('/gadgets', async (req, res) => {
//       const gadget = req.body
//       const result = await gadgetsCollection.insertOne(gadget)
//       res.send(result)
//     })

//     app.patch('/gadgets/:id', async (req, res) => {
//       const id = req.params.id
//       const query = { _id: new ObjectId(id) }
//       const item = req.body
//       console.log(item);
//       const updatedDoc = {
//         $set: {
//           name: item.name,
//           category: item.category,
//           price: item.price,
//           rating: item.rating,
//           datails: item.datails
//         }
//       }
//       const result = await gadgetsCollection.updateOne(query, updatedDoc)
//       res.send(result)
//     })

//     // Featured

//     app.get('/featured', async (req, res) => {
//       const search = req.query.name
//       const query = {
//         category: { $regex: search, $options: 'i' }
//       }
//       const result = await gadgetsCollection.find(query).toArray()
//       console.log(result);
//       res.send(result)
//     })

//     //review

//     app.get('/reviews', async (req, res) => {
//       const result = await reviewsCollection.find().toArray()
//       res.send(result)
//     })



//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally { }
// }
// run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})