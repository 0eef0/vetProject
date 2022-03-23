const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const User = require('../models/users')

console.log("Passport.js is running");

module.exports = function (passport) {
    console.log("The export function is working in Passport.js");

    //Serialization + deserialization for simultaneous logins
    passport.serializeUser(function (user, done) {
        console.log("Serialize is running");
        done(null, user.id)
    })

    passport.deserializeUser(function (id, done) {
        console.log("Deserialize is running");
        User.findById(id, function (err, user) {
            console.log("User.findById is running");
            done(err, user)
        })
    })

    passport.use(
        new LocalStrategy({ username: 'username' }, (username, password, done) => {

            console.log("Passport.use ran successfully");

            User.findOne({ username: username })
                .then((user) => {
                    console.log("This is in Passport.js", user);

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

                    // console.log(user.username)
                    // console.log(username)
                    // console.log(password)
                    // console.log(user.password)
                })
                .catch((err) => { console.log(err) })
        })
    )
}