require('dotenv').config()
const connectDB = require('./db/connect')
const pets = require('./pets.json')
const animal = require('./models/model')
const start = async(req,res)=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await animal.deleteMany()
        await animal.create(pets)
        console.log('Success!!!!')
        process.exit(0)
    }catch(error){
        console.log(error)
    }
}
start()