const express = require('express');
const app = express();
const router = express.Router();
const routes = require('./routes/pets.js');
const navigation = require('./routes/navigation.js');
const routesApp = require('./routes/applicationRoute.js');
const connectDB = require('./db/connect.js');
const passport = require('passport');
require('./middleware/Passport')(passport)
const flash = require('connect-flash');
// const loginRoute = require('./routes/login');
const loginAdmin = require('./routes/loginAPI')
const populateProducts = require('./populate');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config()
const gridFSRoutes = require("./routes/gridFSroute")
const upload = require('express-fileupload')

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
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use('/api/v1/pets', routes);
app.use('/api/v1/petImages', gridFSRoutes);
app.use('/api/v1/applications', routesApp);
app.use('/', navigation);

app.use(express.static("./public"));

// routes for login page
app.use('/adminLogin', require('./routes/login'))
app.use('/api/v1/login', loginAdmin)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();

module.exports = router;