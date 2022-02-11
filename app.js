//important things
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
// const passportLocalMongoose = require('passport-local-mongoose');
const userModel = require('./models/users');

const app = express();
const path = require('path');
const routes = require('./routes/pets.js');
const routesApp = require('./routes/applicationRoute.js');
const loginRoute = require('./routes/login.js');
const connectDB = require('./db/connect.js');
const populateProducts = require('./populate');

const port = process.env.PORT || 5000;

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect("mongodb://localhost/auth_demo_app");

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(require("express-session")({
//     adminHomepage: "Rusty is a dog",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(userModel.authenticate()));
// passport.serializeUser(userModel.serializeUser());
// passport.deserializeUser(userModel.deserializeUser());

//important packages
require('dotenv').config()

//middleware functions
app.use(express.json())
app.use('/api/v1/pets', routes);
app.use('/api/v1/applications', routesApp);
app.use('/login', loginRoute)
// app.use(bodyParser.urlencoded({ extended: false }));
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

// Admin Panel
app.get('/loginPage', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/adminLogin.html'));
})
// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/adminHomepage",
//     failureRedirect: "/login"
// }), function (req, res) {
// });
// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });

// // Admin Homepage
// app.get("/adminHomepage", isLoggedIn, function (req, res) {
//     res.render("adminHomepage");
// });

// // Master page for registering new accounts
// app.get("/register", function (req, res) {
//     res.render("register");
// });
// app.post('/register', function (req, res) {
//     var username = req.body.username
//     var password = req.body.password
//     userModel.register(new User({ username: username }),
//         password, function (err, user) {
//             if (err) {
//                 console.log(err);
//                 return res.render("register");
//             }

//             passport.authenticate("local")(
//                 req, res, function () {
//                     res.render("secret");
//                 });
//         });
// });

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }

// uncomment this when adding DB functionality
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();
