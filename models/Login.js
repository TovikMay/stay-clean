const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Please Enter user name'
    },
    email: {
       type: String,
       unique: true,
       required: 'Please Enter email'
    },
    password: {
        type: String,
        unique: true,
        required: 'Please Enter password'
     },
})

//exporting mongoose model
module.exports = mongoose.model('Login', loginSchema);