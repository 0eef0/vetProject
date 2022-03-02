const mongoose = require('mongoose');
// import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Must Provide a Username']
    },
    name: {
        type: String,
        required: [true, 'Must Provide a name']
    },
    password: {
        type: String,
        required: [true, 'Must Provide a Password']
    },
    status: {
        type: String,
        required: [true, 'Must Provide a Status'],
        enum: {
            values: ['Admin', 'Master'],
            message: '{VALUE} is not supported',
        }
    },
    logs: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: new Date()
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('users', UserSchema);