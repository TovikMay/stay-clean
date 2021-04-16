//require mongoose
const mongoose = require('mongoose');

//schema for data
const truckRegSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Please Enter user name'
     },
     city: {
        type: String,
        required: 'Please Enter city'
     },
     licence: {
        type: String,
        unique: true,
        required: 'Please Enter drivers license'
     },
     Plate: {
        type: String,
        unique: true,
        required: 'Please Enter plate'
     },
     gender: String,
     status: String,
     imageupload: String,
})

//exporting mongoose model
module.exports = mongoose.model('TruckReg', truckRegSchema);