const express = require('express');
const router = express.Router();

const {getAllThree,getThree,updateThree} = require('../controllers/applicationHistory')

// Controllers for application History
router.route('/').get(getAllThree);
router.route('/:id').get(getThree).patch(updateThree);

module.exports = router;