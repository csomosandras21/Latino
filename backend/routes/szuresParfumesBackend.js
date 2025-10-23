const express = require('express');
const {
    getSzuresParfumes,
    getSzuresAllParfumes,
} = require('../controllers/szuresParfumesControllersBackend');
const router = express.Router();

router.get('/', getSzuresAllParfumes);
router.get('/:id', getSzuresParfumes);

module.exports = router;
