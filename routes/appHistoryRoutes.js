const express = require('express');
const router = express.Router();

const {getAllThree,createThree,getThree,updateThree,deleteItThree} = require('../controllers/applicationHistory')

// Controllers for application History
router.route('/').get(getAllThree).post(createThree);
router.route('/:id').get(getThree).patch(updateThree).delete(deleteItThree);

module.exports = router;