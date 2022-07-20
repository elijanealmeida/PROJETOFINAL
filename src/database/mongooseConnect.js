require('dotenv-safe').config()
const MONGO_URI = process.env.MONGO_URI
const mongoose = require('mongoose')

const connect = async() => {
   try {
     await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log('banco conectado! ')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}