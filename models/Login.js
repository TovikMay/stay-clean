//require mongoose
const mongoose = require('mongoose');

//schema for data
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Please Enter user name'
     },
     password: {
        type: String,
        unique: true,
        required: 'Please Enter password'
     },
    
})

//exporting mongoose model
module.exports = mongoose.model('Login', loginSchema);