const mongoose = require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
})
module.exports =mongoose.model('users',userSchema)