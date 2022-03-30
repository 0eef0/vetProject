const mongoose = require('mongoose');
// import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Must Provide a Username'],
        maxLength: 20
    },
    name: {
        type: String,
        required: [true, 'Must Provide a name'],
        maxLength: 20
    },
    password: {
        type: String,
        required: [true, 'Must Provide a Password']
    },
    status: {
        type: String,
        default: "Admin",
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