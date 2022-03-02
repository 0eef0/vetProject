const express = require('express');
const app = express.Router();
const ensureAuthenticated = require('../middleware/auth')

// Front end
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
})
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/aboutUs.html'));
})
app.get('/adopt', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/pets.html'));
})
app.get('/pet', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/individualPet.html'));
})
app.get('/adoptionform', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/adoptForm.html'));
})

// Admin Pages
app.get('/adminLogin', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/adminLogin.html'));
})
app.get('/adminHome', /* loggedIn, */ensureAuthenticated,(req, res) => {
  res.sendFile(path.resolve(__dirname, './public/adminApp.html'));
})
app.get('/adminApplication', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/adminIndApp.html'));
})
app.get('/adminPets', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/adminPets.html'));
})
app.get('/adminPet', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/adminIndPet.html'));
})
app.get('/adminRecords', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/adminRecords.html'))
})

app.post('/adminLogin', (req, res) => {
  console.log(req.body)
  res.redirect('adminHome');
})

// module.exports = navigation;