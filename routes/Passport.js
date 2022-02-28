const User = require('../models/users')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({username:'username'},(username,password,done)=>{
            User.findOne({username:username})
            .then((user)=>{
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
                console.log(user.username)
                console.log(username)
                console.log(password)
                console.log(user.password)
            })
             .catch((err)=>{console.log(err)})
        })
    )

    //Serialization + deserialization for simulatanious loggins
    passport.serializeUser(function(user,done){
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err,user){
            done(err,user)
        })
    })

    
}