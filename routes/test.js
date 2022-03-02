const express = require('express');
const router = express.Router();

const { gridUpload, gridGetAll } = require('../controllers/mavtest');

//Controllers for pets
router.route('/').post(gridUpload);
// router.route('/:id').get(get).patch(update).delete(deleteIt);

module.exports = router;