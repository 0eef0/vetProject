const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const routes = require('./routes/pets.js');
const routesApp = require('./routes/applicationRoute.js');
const connectDB = require('./db/connect.js');
const loginRoute = require('./routes/login');
const populateProducts = require('./populate');
const expressEJSLayouts = require('express-ejs-layouts');

const port = process.env.PORT || 5000;

//important packages
require('dotenv').config()

//middleware functions
app.use(express.json())
app.use('/api/v1/pets', routes);
app.use('/api/v1/applications', routesApp);
app.use('/login', loginRoute)
app.use(express.static("./public"));

// Front end
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/aboutUs.html'));
})
app.get('/adopt', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/pets.html'));
})
app.get('/pet', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/individualPet.html'));
})
app.get('/adoptionform', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adoptForm.html'));
})

// Admin Pages
app.get('/adminLogin', (req, res) => {
    res.render('adminLogin')
})
app.get('/adminHomepage', /* loggedIn, */ (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adminApp.html'));
})
app.get('/adminApplication', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adminIndApp.html'));
})
app.get('/adminPets', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adminPets.html'));
})
app.get('/adminRecords', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adminRecords.html'))
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
