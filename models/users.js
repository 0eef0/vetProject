const mongoose = require('mongoose');
// import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: [true, 'Must Provide a Username']
    },
    Password: {
        type: Object,
        required: [true, 'Must Provide a Password']
    },
    Status: {
        type: String,
        required: [true, 'Must Provide a Status'],
        enum: {
            values: ['Admin', 'Master'],
            message: '{VALUE} is not supported',
        }
    },
    Logs: {
        type: Array,
        default: []
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('users', UserSchema);