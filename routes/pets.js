const express = require('express');
const router = express.Router();

const { petUpload, petDelete } = require('../controllers/gridFs');
const { getAll, deleteAll, get, update } = require('../controllers/petController')

//Controllers for pets
router.route('/').get(getAll).post(petUpload).delete(deleteAll);
router.route('/:id').get(get).patch(update);

module.exports = router;