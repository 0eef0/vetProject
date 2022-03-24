//primary libraries and things
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require('./middleware/Passport')(passport)
require('dotenv').config()
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./db/connect.js');

//font-end navigation
const routes = require('./routes/pets.js');
const navigation = require('./routes/navigation.js');
const routesApp = require('./routes/applicationRoute.js');

//back-end navigation
const loginRoute = require('./routes/login');
const loginAdmin = require('./routes/loginAPI')

//for gridFS
const bodyParser = require('body-parser')
const gridFSRoutes = require("./routes/gridFSroute")
const upload = require('express-fileupload')

const populateProducts = require('./populate');

const port = process.env.PORT || 5000;

//important packages
app.use(upload());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash())
// app.use((req,res,next) => {
//     res.locals.success.msg = req.flash('success_msg');
//     res.locals.error.msg = req.flash('error_msg');

// })


//middleware functions
app.use(express.json({ limit: '16MB' }))

// app.use(express.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(routes);
app.use('/api/v1/petImages', gridFSRoutes);
app.use('/api/v1/applications', routesApp);
app.use('/', navigation);

app.use(express.static("./public"));

// routes for login page
app.use('/adminLogin', require('./routes/login'))
app.use('/api/v1/login', loginAdmin)
app.use('/users', loginRoute)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();

module.exports = router;