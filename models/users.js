const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true
    },
    LastName: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true
    },
    Email: {
        type: String,
        required: [true, 'Must provide an email'],
        trim: true
    },
    Password:{
        type: String,
        required: [true, 'Must provide a password']
    },
    PhoneNumber:{
        type: String,
        required: [true, 'Must provide a phone number'],
        trim: true
    },
    Status:{
        type: String,
        required: [false],
        trim: true
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('users', UserSchema);