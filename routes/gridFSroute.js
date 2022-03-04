const express = require('express');
const router = express.Router();

const { imgGridUpload, getGridImgs, getGridImg } = require('../controllers/gridFsTest');

//Controllers for pets
router.route('/').get(getGridImgs).post(imgGridUpload);
router.route('/:id').get(getGridImg);

module.exports = router;