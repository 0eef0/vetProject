// const mongoose = require('mongoose');
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: [true, 'Must Provide a Username']
    },
    Password: {
        type: String,
        required: [true, 'Must Provide a Password']
    },
    Status: {
        type: String,
        required: [true, 'Must Provide a Status'],
        enum: {
            values: ['Admin', 'Master'],
            message: '{VALUE} is not supported',
        }
    }

    // FirstName: {
    //     type: String,
    //     required: [true, 'Must provide a name'],
    //     trim: true
    // },
    // LastName: {
    //     type: String,
    //     required: [true, 'Must provide a name'],
    //     trim: true
    // },
    // Email: {
    //     type: String,
    //     required: [true, 'Must provide an email'],
    //     trim: true
    // },
    // Password:{
    //     type: String,
    //     required: [true, 'Must provide a password']
    // },
    // PhoneNumber:{
    //     type: String,
    //     required: [true, 'Must provide a phone number'],
    //     trim: true
    // },
    // Status:{
    //     type: String,
    //     required: [false],
    //     trim: true
    // }
});

// This is basic validation not advanced
// module.exports = mongoose.model('users', UserSchema);
export default mongoose.model('users', UserSchema)