const path = require('path');

const ensureAuthenticated = (req,res,next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  // req.flash('error_message', 'please login to view this resourcenet');
  res.sendFile(path.resolve(__dirname, '../public/adminLogin.html'));
}

const ensureMasterAuthenticated = (req, res, next) => {
  if (req.isAuthenticated() && req.user.status == 'Master') { return next()};
  res.sendFile(path.resolve(__dirname, '../public/adminLogin.html'))
}

module.exports = {
    ensureAuthenticated,
    ensureMasterAuthenticated
}