const express = require('express');
const router = express.Router();
const usersController = require('../controller/users');
router.post('/signup', usersController.postSignup);
module.exports = router;