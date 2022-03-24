// const passport = require("passport")
// const express = require("express")
// const Router = express.Router()
const express = require("express")
const app = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport');
const { authenticate } = require('passport');

const users = require('../models/users');

app.use(express.json())
// Router.post('/login', passport.authenticate('local', { successRedirect: '/adminHome', failureRedirect: '/adminLogin' }));

app.post('/', async (req, res) => {
    const {username, name, password, status} = req.body;
    console.log(req.body)
    console.log(username, name, password, status)
    let errors = [];
    try {
        // const salt = await bcrypt.genSalt(10)
        // console.log(`Salt ${salt}`);

        users.findOne({username : username}).exec((err, user) => {
            console.log(username);
            if (user) {
                console.log('username already in use')
                errors.push({msg: 'user already registered'})
            } else {
                const newUser = new users({
                    username: username,
                    name: name,
                    password: password,
                    status: status
                })
        
                bcrypt.genSalt(10, (err,salt) =>
                    bcrypt.hash(newUser.password, salt,
                        (err, hash) => {
                            if (err) throw err;
                                //same pass to hash
                                newUser.password = hash;
                            //save user
                            
                            newUser.save()
                            .then((value) => {
                                console.log(value)
                                // req.flash('success_msg', 'You have now registered')
                                res.send(200)
                            })
                            .catch(value => console.log(value))
                        }    
                    )
                )
            }
        })
    } catch (error) {
        console.error(error)
    }
})

app.post('/login', async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/adminHome',
        failureRedirect: '/adminLogin'
    })(req, res, next)
})

app.post('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
})

module.exports = app;