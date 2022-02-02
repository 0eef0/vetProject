require('dotenv').config()
const connectDB = require('./db/connect')
const pets = require('./pets.json')
const app = require('./applications.json')
const history = require('./applications.json')
const animal = require('./models/petModel')
const form = require('./models/application')
const start = async(req,res)=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await animal.deleteMany()
        await form.deleteMany()
        await animal.create(pets)
        await form.create(app)
        await form.create(history)
        console.log('Success!!!!')
        // process.exit(0)
    }catch(error){
        console.log(error)
    }
}
start()