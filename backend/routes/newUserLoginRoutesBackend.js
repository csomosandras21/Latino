const express = require('express');

const { postNewUserLoginBackend } = require('../controllers/newUserLoginControllersBackend');
const router = express.Router();

router.post('/', postNewUserLoginBackend);

module.exports = router;