const mongoose = require('mongoose');

const ApplicationsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Must provide a full name'],
        trim: true
    },
    occupation: {
        type: String,
        required: [true, 'Must provide an occupation, or say unemployed'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Must provide a valid Home Address'],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, 'Must provide a phone number'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Must provide an email'],
        trim: true
    },
    userReference: {
        type: String,
        required: [true, 'Must provide a valid Reference'],
        trim: true
    },
    children: {
        type: Number,
        required: [true, 'Must provide number of children'],
        trim: true
    },
    housing: {
        type: String,
        required: [true, 'Must provide your Housing'],
        trim: true
    },
    space: {
        type: String,
        required: [true, 'Must provide if house provides enough space'],
        trim: true
    },
    minor: {
        type: Boolean,
        default:null
    },
    guardianName: {
        type: String,
        required: [true, 'Must provide a guardian name, put your own name if you are over 18'],
        trim: true
    },
    guardianPhone: {
        type: String,
        required: [true, 'Must provide a guardian phone number, put yours if you are over 18'],
        trim: true
    },
    guardianEmail: {
        type: String,
        required: [true, 'Must provide a guardian email, put your own if you are over 18'],
        trim: true
    },
    currentPets: {
        type: String,
        required: [true, 'Must provide amount of current pets you have and what breed'],
        trim: true
    },
    petVaccination: {
        type: Boolean,
        required: [true, 'Must provide if current pets are vaccinated and sterilized'],
        default: null
    },
    petVaccinationReason: {
        type: String,
        default:null,
        trim: true
    },
    petExamine: {
        type: String,
        required: [true, 'Must provide if current pet is annually examined'],
        trim: true
    },
    petExamineReason: {
        type: String,
        default:null,
        trim: true
    },
    qualification: {
        type: String,
        required: [true, 'Must provide why you think you are qualified'],
        trim: true
    },
    petTime: {
        type: String,
        required: [true, 'Must provide Where your pet will spend most of their time'],
        trim: true
    },
    affordableMedication: {
        type: String,
        required: [true, 'Must provide If you can afford medication for your pet'],
        trim: true
    },
    declaw: {
        type: String,
        default: "Current",
        enum: {
            values: ['Yes', 'No', 'Maybe', 'N/A'],
            message: '{VALUE} is not supported'
        }
    },
    acknowledgement: {
        type: Boolean,
        required: [true, 'Must say you agree with the above terms that the information you have provided is true'],
        default: false
    },
    acknowledgementAdoption: {
        type: Boolean,
        required: [true, 'Must say you agree with the above terms that you are not guaranteed an adoption'],
        default: false
    },
    birthday: {
        type: Date,
        required: [true, 'Must provide your age'],
    },
    accepted: {
        type: Boolean,
        default: false
    },
    rejected: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "Active",
        enum: {
            values: ['Active', 'Archive'],
            message: '{VALUE} is not supported'
        }
    },
    wantedPet: {
        type: String,
        required: [true, 'Must provide the name of pet you wish to adopt'],
        trim: true
    },
    wantedPetId: {
        type: String,
        required: [true, 'Must provide the id of pet you wish to adopt'],
        trim: true
    },
    dateCreated: {
        type: Date,
        required: [true, 'Need provide date created']
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('Application', ApplicationsSchema);