const express = require('express');
const pictureUploader = require('../middlewares/pictureToCloudinary');

const {
    getNewParfumeBackend,
    postNewParfumeBackend,
} = require('../controllers/newParfumeControllersBackend');
const router = express.Router();

router.get('/', getNewParfumeBackend);
router.post('/', pictureUploader, postNewParfumeBackend);

module.exports = router;
