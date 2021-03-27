//require mongoose
const mongoose = require('mongoose');

//schema for data
const registerSchema = new mongoose.Schema({
    enteryourname: {
        type: String,
        required: 'Please Enter your name'
    },
    enteryouremail: {
       type: String,
       unique: true,
       required: 'Please Enter your email'
    },
    createpassword: {
        type: String,
        unique: true,
        required: 'Please Create password'
     },
    confirmpassword: {
        type: String,
        unique: true,
        required: 'Please Confrim password'
     },
     
})

//exporting mongoose model
module.exports = mongoose.model('Register', registerSchema);