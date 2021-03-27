//require mongoose
const mongoose = require('mongoose');

//schema for data
const orderSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Please Enter first name'
    },
    lastname: {
       type: String,
       required: 'Please Enter last name'
    },
    username: {
        type: String,
        required: 'Please Enter user name'
     },
     servicesrequested: String,
     driverallocated: String,

    location: {
        type: String,
        required: 'Please Enter location'
     },
    truckregistrationnumber: {
        type: String,
        unique: true,
        required: 'Please Enter truck registration number'
     },
     
})

//exporting mongoose model
module.exports = mongoose.model('Order', orderSchema);