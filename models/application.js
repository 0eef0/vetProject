const mongoose = require('mongoose');

const ApplicationsSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'Must provide a first name'],
        trim: true
    },
    LastName: {
        type: String,
        required: [true, 'Must provide a last name'],
        trim: true
    },
    Email: {
        type: String,
        required: [true, 'Must provide an email'],
        trim: true
    },
    PhoneNumber: {
        type: String,
        required: [true, 'Must provide a phone number'],
        trim: true
    },
    Age: {
        type: Number,
        required: [true, 'Must provide your age'],
    },
    lifeStyles: {
        type: String,
        required: [true, 'Must provide your lifestyle'],
        trim: true
    },
    HasPets: {
        type: Boolean,
        default: false
    },
    PetHistory: {
        type: String,
        required: [true, 'Must provide your history with pets'],
        trim: true
    },
    PetFriendly: {
        type: Boolean,
        default: false
    },
    Accepted: {
        type: Boolean,
        default: false
    },
    Rejected: {
        type: Boolean,
        default: false
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('model', ApplicationsSchema);