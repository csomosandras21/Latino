const express = require('express');
const pictureDeleter = require('../middlewares/pictureDeleteFromCloudinary');

const {
    getAllParfumesBackend,
    deleteOneParfumeBackend,
    getOneParfumeBackend,
    updateOneParfumeBackend,
} = require('../controllers/parfumesControllersBackend');
const router = express.Router();

router.get('/', getAllParfumesBackend);
router.get('/:id', getOneParfumeBackend);
router.put('/:id', updateOneParfumeBackend);
router.delete('/:id', pictureDeleter, deleteOneParfumeBackend);

module.exports = router;
