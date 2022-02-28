const passport = require("passport")
const express = require("express")
const Router = express.Router()

Router.post('/login', (req, res,next) => {
    passport.authenticate('local',{
        successRedirect:'./public/adminApp.html',
        failureRedirect:'./public/adminLogin.html', 
        failureFlash:true,
    })(req,res,next);
})
// Not finished yet
Router.post('/logout', (req, res, next) => {
    req.logout();
    res.redirect('')
})

module.exports = Router;