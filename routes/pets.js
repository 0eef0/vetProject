const express = require('express');
const app = express();

const { petUpload, petDelete } = require('../controllers/gridFs');
const { getAll, deleteAll, get } = require('../controllers/petController')

app.get('/api/v1/pets/:id', get);
app.get('/api/v1/pets', getAll);
app.post('/api/v1/pets', petUpload);
app.delete('/api/v1/pets', deleteAll);

app.post('/api/v1/petDelete/:id', petDelete);

module.exports = app;