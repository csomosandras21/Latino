const express = require('express');
const { getAllDgsFrontend } = require('../controllers/dgControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllDgsFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;