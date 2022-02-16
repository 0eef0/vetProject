const express = require('express');
const router = express.Router();

const { getAllApplications, createApplication, getApplication, updateApplication, deleteApplication } = require('../controllers/applicationsControllers')

//Controllers for application
router.route('/').get(getAllApplications).post(createApplication);
router.route('/adoptionform').post(createApplication)
router.route('/:id').get(getApplication).patch(updateApplication).delete(deleteApplication);

module.exports = router;