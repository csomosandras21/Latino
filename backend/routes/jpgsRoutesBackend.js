const express = require('express');
const { getAllJpgsFrontend } = require('../controllers/jpgsControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllJpgsFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;