const express = require('express');

const {
    getNewUserBackend,
    postNewUserBackend,
} = require('../controllers/newUserControllersBackend');
const router = express.Router();

router.get('/', getNewUserBackend);
router.post('/', postNewUserBackend);

module.exports = router;