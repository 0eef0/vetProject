//important things
const express = require('express')
const app = express()
const connectDB = require('./db/connect');
const populateProducts = require('./populate')

//important packages
require('dotenv').config()

//middleware functions
app.use(express.json())
app.use(express.static("./public"));



const port = process.env.PORT || 3000 ;

//when adding DB functionality comment this out and uncomment the start function
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}....`)
// })

// uncomment this when adding DB functionality
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start()