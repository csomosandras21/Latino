const express = require('express');
const { getAllVersaccesFrontend } = require('../controllers/versacceControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllVersaccesFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;