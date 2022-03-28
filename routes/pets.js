// check authentication for these functions
const express = require('express');
const app = express();

const { petUpload, petDelete, petUpdate, getGridImgs, getGridImg, deleteGridImg } = require('../controllers/gridFs');
const { getAll, deleteAll, get } = require('../controllers/petController')

app.get('/api/v1/pets/:id', get);
app.post('/api/v1/pets/:id', petUpdate);
app.get('/api/v1/pets', getAll);
app.post('/api/v1/pets', petUpload);
app.delete('/api/v1/pets', deleteAll);

app.post('/api/v1/petDelete/:id', petDelete);

app.get('/api/v1/petImages', getGridImgs);
app.get('/api/v1/petImages/:id', getGridImg);
app.delete('/api/v1/petImages/:id', deleteGridImg);

module.exports = app;