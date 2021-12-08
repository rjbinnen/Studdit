const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const userSchema = new Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('User', userSchema)