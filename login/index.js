const router = require("../app");

router.post('/login', (req, res,next) => {
    passport.authenticate('local',{
        successRedirect:'home',
        failureRedirect:'/users/login', 
        failureFlash:true,
    })(req,res,next);
})
// Not finished yet
router.post('/logout', (req, res, next) => {
    req.logout('/')
})