//require mongoose
const mongoose = require('mongoose');

//schema for data
const addEmployeeSchema = new mongoose.Schema({
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
     nin: {
        type: String,
        unique: true,
        required: 'Please Enter NIN'
     },
     residence: {
        type: String,
        required: 'Please Enter city'
     },
     licence: {
        type: String,
        unique: true,
        required: 'Please Enter drivers license'
     },
     gender: String,
     status: String,
     incidences:[{
         type: String
     }],
     imageupload: String,
     terms: String,
})

//exporting mongoose model
module.exports = mongoose.model('AddEmployee', addEmployeeSchema);