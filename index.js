const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000


app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uoehazd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const usersCollection = client.db('Tech-Oasis-DB').collection('user')
    const gadgetsCollection = client.db('Tech-Oasis-DB').collection('gadgets')
 
    // user 
    
    app.post('/users', async (req, res) => {
        const user = req.body
        const query = { email: user.email }
        const existingUser = await usersCollection.findOne(query)
        if (existingUser) {
          return res.send({ message: 'user already exists', insertedId: null })
        }
        const result = await usersCollection.insertOne(user)
        res.send(result)
      })

   // Gadgets

    app.post('/gadgets', async (req, res) => {
      const gadget = req.body
      const result = await gadgetsCollection.insertOne(gadget)
      res.send(result)
    }) 

    


    
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {}
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})