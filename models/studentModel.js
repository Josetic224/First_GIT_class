const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    stack:{
        type:String,
        required:true,
    },
    
    score:{
        html:{
            type:Number
        },
        javaScript:{
            type:Number,

        },
        css:{
            type:Number,
        },
        node:{
            type:Number
        },
    }
}, {timestamps:true})

const studentModel = new mongoose.model("student", studentSchema)

module.exports = studentModel