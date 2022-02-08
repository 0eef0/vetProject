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
    Occupation: {
        type: String,
        required: [true, 'Must provide an occupation, or say unemployed'],
        trim: true
    },
    Address: {
        type: String,
        required: [true, 'Must provide a valid Home Address'],
        trim: true
    },
    PhoneNumber: {
        type: String,
        required: [true, 'Must provide a phone number'],
        trim: true
    },
    Email: {
        type: String,
        required: [true, 'Must provide an email'],
        trim: true
    },
    UserReference: {
        type: String,
        required: [true, 'Must provide a valid Reference'],
        trim: true
    },
    Children: {
        type: Number,
        required: [true, 'Must provide number of children'],
        trim: true
    },
    Housing: {
        type: String,
        required: [true, 'Must provide your Housing'],
        trim: true
    },
    Space: {
        type: String,
        required: [true, 'Must provide if house provides enough space'],
        trim: true
    },
    Minor: {
        type: Boolean,
        default:null
    },
    GuardianContact: {
        type: String,
        default: null
    },
    GuardianName: {
        type: String,
        required: [true, 'Must provide a guadian name, put your own name if you are over 18'],
        trim: true
    },
    GuardianPhone: {
        type: String,
        required: [true, 'Must provide a guardian phone number, put yours if you are over 18'],
        trim: true
    },
    GuardianEmail: {
        type: String,
        required: [true, 'Must provide a guardian email, pu tyour own if you are over 18'],
        trim: true
    },
    CurrentPets: {
        type: String,
        required: [true, 'Must provide amout of current pets you have and what breed'],
        trim: true
    },
    PetVaccination: {
        type: Boolean,
        required: [true, 'Must provide if current pets are vaccinated and sterilized'],
        default: null
    },
    PetVaccinationReason: {
        type: String,
        default:null,
        trim: true
    },
    PetExamine: {
        type: String,
        required: [true, 'Must provide if current pet is annually examined'],
        trim: true
    },
    PetExamineReason: {
        type: String,
        default:null,
        trim: true
    },
    InterestedPet: {
        type: String,
        required: [true, 'Must provide which pet you are looking at'],
        trim: true
    },
    Qualification: {
        type: String,
        required: [true, 'Must provide why you think you are qualified'],
        trim: true
    },
    PetTime: {
        type: String,
        required: [true, 'Must provide Where your pet will spend most of their time'],
        trim: true
    },
    AffordableMedication: {
        type: String,
        required: [true, 'Must provide If you can afford medication for your pet'],
        trim: true
    },
    Declaw: {
        type: String,
        default: "Current",
        enum: {
            values: ['Yes', 'No', 'Maybe', 'N/A'],
            message: '{VALUE} is not supported'
        }
    },
    Acknowledgement: {
        type: Boolean,
        required: [true, 'Must say you agree with the above terms that the information you have provided is true'],
        default: false
    },
    AcknowledgementAdoption: {
        type: Boolean,
        required: [true, 'Must say you agree with the above terms that you are not guaranteed an adoption'],
        default: false
    },
    Birthday: {
        type: Date,
        required: [true, 'Must provide your age'],
    },
    Accepted: {
        type: Boolean,
        default: false
    },
    Rejected: {
        type: Boolean,
        default: false
    },
    Status: {
        type: String,
        default: "Current",
        enum: {
            values: ['Active', 'Archive'],
            message: '{VALUE} is not supported'
        }
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('Application', ApplicationsSchema);