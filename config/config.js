const mongoose = require('mongoose')
require('dotenv').config()
const DB = process.env.DATABASE
mongoose
.connect(DB)
.then(()=>{
    console.log(`Database connected successfully`)
})
.catch((e) =>{
    console.log(`Something went wrong`, e.message)
})

