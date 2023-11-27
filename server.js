const express = require ('express');
const studentRouter = require ('./routes/studentRouter')
require('./config/config')
require('dotenv').config()

const app = express();

app.use(express.json())

app.use('/api/student', studentRouter)

const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`listening for connection on port: ${PORT}`)
})
