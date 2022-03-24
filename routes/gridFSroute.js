const express = require('express');
const router = express.Router();

const { getGridImgs, getGridImg, petDelete } = require('../controllers/gridFS');

//Controllers for pets
router.route('/').get(getGridImgs);
router.route('/:id').get(getGridImg).delete(petDelete);

module.exports = router;