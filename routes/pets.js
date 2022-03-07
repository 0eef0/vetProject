const express = require('express');
const router = express.Router();

const { getAll, deleteAll, create, get, update, deleteIt } = require('../controllers/petController')

//Controllers for pets
router.route('/').get(getAll).post(create).delete(deleteAll);
router.route('/:id').get(get).patch(update).delete(deleteIt);

module.exports = router;