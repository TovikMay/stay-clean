//require mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


//schema for data
const contactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'Please Enter your fullname'
    },
   email: {
        type: String,
        unique: true,
        required: 'Please Enter your email'
    },
    number: {
       type: String,
       required: 'Please Enter your number'
    },
    message: {
        type: String,
        required: 'Optional'
    }
    
})

//exporting mongoose model
module.exports = mongoose.model('Contact', contactSchema);