const passport = require("passport")
const express = require("express")
const Router = express.Router()

Router.post('/adminLogin', (req, res,next) => {

    const { username, password } = req.body;
    let errors = [];
    if (!username || !password) {
        errors.push({msg: "Please fill out all fields"})
    }

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