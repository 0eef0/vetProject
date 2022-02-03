//important things
const express = require('express')
const app = express()
const path = require('path')
const routes = require('./routes/pets')
const routesApp = require('./routes/applicationRoute')
const routesHistory = require('./routes/appHistoryRoutes')
const connectDB = require('./db/connect');
const populateProducts = require('./populate')

//important packages
require('dotenv').config()

//middleware functions
app.use(express.json())
app.use('/api/v1/pets', routes);
app.use('/api/v1/application', routesApp);
app.use('/api/v1/applicationHistory', routesHistory);
app.use(express.static("./public"));

//ROUTING
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/aboutUs.html'))
})
app.get('/adopt', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/pets.html'))
})
app.get('/pet', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/individualPet.html'))
})
app.get('/adoptionform', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adoptForm.html'))
})


const port = process.env.PORT || 5000;

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