const connectDB = require('./db/connect')

const pets = require('./pets.json')
const app = require('./applications.json')
const animal = require('./models/petModel')
const form = require('./models/application')

const populateProducts = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        await animal.deleteMany()
        await form.deleteMany()
        await animal.create(pets)
        await form.create(app)
        console.log('populate.js ran Successfully')
        // process.exit(0)
    }catch(error){
        console.log(error)
    }
}
console.log('test')
module.exports = populateProducts;