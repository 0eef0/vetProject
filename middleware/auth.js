const path = require('path');
// require('dotenv').config()
// const express = require('express')
// const app = express()
// const jwt = require('jsonwebtoken')
// const { generateAccessToken, generateRefreshToken } = require('./tokenGeneration')
// const port = process.env.port || 4000;

const ensureAuthenticated = (req,res,next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  // req.flash('error_message', 'please login to view this resourcenet');
  res.sendFile(path.resolve(__dirname, '../public/adminLogin.html'));
}

// app.use(express.json())
// let refreshTokenDatabase = [];

// app.post('/token', (req, res) => {
//     const clientRefreshToken = req.body.token;
//     if (clientRefreshToken == null) return res.sendStatus(401)
//     if (!refreshTokenDatabase.includes(clientRefreshToken)) return res.sendStatus(403)
//     jwt.verify(clientRefreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) res.sendStatus(403)
//         const accessToken = generateAccessToken({ name: user.name })
//         res.json({ accessToken })
//     })
// })

// app.post('/login', (req, res) => {
//     // Authenticate user
//     console.log(req.body);
//     const username = req.body.username
//     const user = { name: username }

//     // Assuming that the authentication has been completed, the JWT.sign should also include the password
//     const accessToken = generateAccessToken(user)
//     const refreshToken = generateRefreshToken(user)
//     refreshTokenDatabase.push(refreshToken)

//     res.json({ accessToken, refreshToken })
// })

// app.delete('/logout', (req, res) => {
//     refreshTokenDatabase = refreshTokenDatabase.filter(token => token !== req.body.token)
//     res.sendStatus(204)
// })

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// })


module.exports = {
    ensureAuthenticated
}