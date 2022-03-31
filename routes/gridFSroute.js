const express = require('express');
const router = express.Router();

const { getGridImgs, getGridImg } = require('../controllers/gridFS.js');

//Controllers for pets
router.route('/').get(getGridImgs);
router.route('/:id').get(getGridImg);

module.exports = router;