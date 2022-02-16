const connectDB = require('./db/connect')

const pets = require('./pets.json')
const app = require('./applications.json')
const users = require('./users.json')

const animal = require('./models/petModel')
const form = require('./models/application')
const usersModel = require('./models/users');

const populateProducts = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        // await animal.deleteMany()
        await form.deleteMany()
        // await usersModel.deleteMany()

        // await animal.create(pets)
        // await form.create(app)
        // await usersModel.create(users)

        console.log('populate.js ran Successfully')
        // process.exit(0)
    }catch(error){
        console.log(error)
    }
}

module.exports = populateProducts;