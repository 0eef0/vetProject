//important things
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/pets.js');
const routesApp = require('./routes/applicationRoute.js');
// const loginRoute = require('./routes/login.js');
const connectDB = require('./db/connect.js');
const populateProducts = require('./populate');

const port = process.env.PORT || 5000;

//important packages
require('dotenv').config()

//middleware functions
app.use(express.json())
app.use('/api/v1/pets', routes);
app.use('/api/v1/applications', routesApp);
// app.use('/login', loginRoute)
app.use(express.static("./public"));

// Front end
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.ejs'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/aboutUs.ejs'));
})
app.get('/adopt', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/pets.ejs'));
})
app.get('/pet', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/individualPet.ejs'));
})
app.get('/adoptionform', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adoptForm.ejs'));
})

// uncomment this when adding DB functionality
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();
