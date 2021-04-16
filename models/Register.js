//require mongoose
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


//schema for data
const registerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Please Enter first name'
    },
    lastname: {
        type: String,
        required: 'Please Enter last  name'
    },
    enteremail: {
       type: String,
       unique: true,
       required: 'Please Enter your email'
    },
})

//exporting mongoose model
registerSchema.plugin(passportLocalMongoose, { usernameField: 'enteremail' })
module.exports = mongoose.model('Register', registerSchema);