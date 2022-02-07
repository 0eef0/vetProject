const express = require('express');
const router = express.Router();

const { getAllAccounts, createNewAccount, updateAccount, deleteAccount } = require('../controllers/LoginControllers')

//Controllers for application
router.route('/').get(getAllAccounts).post(createNewAccount);
router.route('/:id').patch(updateAccount).delete(deleteAccount);

module.exports = router;