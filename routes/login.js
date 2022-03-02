const passport = require("passport")
const express = require("express")
const Router = express.Router()

Router.post('/adminLogin', (req, res,next) => {
    passport.authenticate('local',{
        successRedirect:'/adminHomepage',
        failureRedirect:'/adminLogin', 
    })(req,res,next);
})
Router.post('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/adminLogin');
})

module.exports = Router;