const express = require('express');
const router = express.Router();

const {getAll,create,get,update,deleteIt} = require('../controllers/petController')

//Controllers for pets
router.route('/').get(getAll).post(create);
router.route('/:id').get(get).patch(update).delete(deleteIt);

module.exports = router;