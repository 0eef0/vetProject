const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Must provide your name'],
        trim: true
    },
    Age: {
        type: Number,
        required: [true, 'Must provide a age'],
        trim: true
    },
    Gender: {
        type: String,
        required: [true, 'Must provide your gender'],
        trim: true
    },
    Medical: {
        type: String,
        required: [true, 'Must provide your medical'],
        trim: true
    },
    Color: {
        type: String,
        required: [true, 'Must provide your color'],
        trim: true
    },
    Breed: {
        type: String,
        required: [true, 'Must provide your breed'],
        trim: true
    },
    Species: {
        type: String,
        required: [true, 'Must provide your species'],
        trim: true
    },
    Personality: {
        type: String,
        required: [true, 'Must provide your personality'],
        trim: true
    },
    Note: {
        type: String,
        required: [true, 'Must provide your note'],
        trim: true
    },
    IMG: {
        type: Array,
        required: [true, 'Must provide your image'],
        trim: true
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('Product', ProductSchema);