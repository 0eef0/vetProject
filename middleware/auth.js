const ensureAuthenticated = (req, res,next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('../public/adminLogin.html')
}

module.exports ={ 
    ensureAuthenticated
}