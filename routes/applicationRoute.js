const express = require('express');
const router = express.Router();

const { getAllTwo, createTwo, getTwo, updateTwo, deleteItTwo } = require('../controllers/applicationsControllers')

//Controllers for application
router.route('/').get(getAllTwo).post(createTwo);
router.route('/:id').get(getTwo).patch(updateTwo).delete(deleteItTwo);

module.exports = router;