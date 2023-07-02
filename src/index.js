const express = require('express')

const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes')

dotenv.config()

const {
  PORT = 3005,
  API_URL = 'http://127.0.0.1',
  //library/mongo/backend  тут должно быть название базы данных которое создала в docker 
  MONGO_URL = 'mongodb://127.0.0.1:27017/backend',
} = process.env

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error))

mongoose.connection.on('error', (error) => {
  console.log(error)
})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
})
