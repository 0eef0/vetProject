const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const User = require('../models/users')
const path = require('path');

module.exports = function (passport) {
    //Serialization + deserialization for simultaneous logins
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user)
        })
    })

    passport.use(
        new LocalStrategy({ username: 'username' }, (username, password, done) => {
            User.findOne({ username: username })
                .then((user) => {
                    if(!user){
                        return done(null,false,{message: 'User not found'});
                    }
                    //match pass
                    bcrypt.compare(password,user.password,(err,isMatch)=>{
                        if (err) throw err;
                        if (isMatch){
                            return done(null,user);
                        }else{
                            return done(null, false, { message: 'password Incorrect'})
                        }
                    })
                })
                .catch((err) => { console.log(err) })
        })
    )
}