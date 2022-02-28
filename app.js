const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const routes = require('./routes/pets.js');
const routesApp = require('./routes/applicationRoute.js');
const connectDB = require('./db/connect.js');
const passport = require('passport');

const loginRoute = require('./routes/login');
const populateProducts = require('./populate');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT || 5000;

//important packages
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {console.log('connected to port 5000')})
.catch((err) => {console.log(err)});
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());


//middleware functions
app.use(express.json())
app.use('/api/v1/pets', routes);
app.use('/api/v1/applications', routesApp);
app.use('/login', loginRoute)
app.use('/adminLogin', require('./routes/Passport'));
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
    res.sendFile(path.resolve(__dirname, './public/adminLogin.html'));
    // res.render('adminLogin')
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
app.get('/adminPet', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adminIndPet.html'));
})
app.get('/adminRecords', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adminRecords.html'))
})

// routes for login page
app.use('/',require('./login/index'))
require('./routes/Passport')(passport)

// uncomment this when adding DB functionality
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();

module.exports = router;