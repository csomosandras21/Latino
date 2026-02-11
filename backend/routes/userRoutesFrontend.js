const app =  require('../server.js');

const express = require('express');
const{
    updateOneUserFrontend,
} = require('../controllers/userControllersFrontend.js');

const router = express.Router();

router.patch('/:id', updateOneUserFrontend);

module.exports = router;