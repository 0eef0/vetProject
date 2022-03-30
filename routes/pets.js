// check authentication for these functions
const express = require('express');
const app = express();

const { petUpload, petDelete, petUpdate, gridAddImg, getGridImgs, getGridImg } = require('../controllers/gridFs');
const { getAll, get } = require('../controllers/petController');
const { ensureAuthenticated } = require('../middleware/auth');

app.get('/api/v1/pets/:id', get);
app.post('/api/v1/pets/:id', ensureAuthenticated, petUpdate);
app.get('/api/v1/pets', getAll);
app.post('/api/v1/pets', ensureAuthenticated, petUpload);

app.post('/api/v1/petDelete/:id', ensureAuthenticated, petDelete);

app.get('/api/v1/petImages', getGridImgs);
app.get('/api/v1/petImages/:id', getGridImg);
app.post('/api/v1/petImages/:id', ensureAuthenticated, gridAddImg);

module.exports = app;