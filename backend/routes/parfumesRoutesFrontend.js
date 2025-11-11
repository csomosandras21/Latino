const express = require('express');
const { getAllParfumesFrontend } = require('../controllers/parfumesControllersFrontend');
const router = express.Router();

router.get('/', getAllParfumesFrontend);

module.exports = router;
