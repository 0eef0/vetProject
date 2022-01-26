const mongoose = require('mongoose');

const ApplicationsSchema = new mongoose.Schema({
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
        required: [true, 'Must provide a name'],
        trim: true
    },
    PhoneNumber: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true
    },
    Age: {
        type: Number,
        required: [true, 'Must provide a name'],
        trim: true
    },
    lifeStyles: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true
    },
    HasPets: {
        required: [true, 'Must provide a name'],
        trim: true
    },
    PetHistory: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true
    },
    Comfort: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true
    },
    Accepted: {
        required: [true, 'Must provide a name'],
        trim: true
    },
    Rejected: {
        required: [true, 'Must provide a name'],
        trim: true
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('model', ApplicationsSchema);