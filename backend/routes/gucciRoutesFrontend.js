const express = require('express');
const { getAllGuccisFrontend } = require('../controllers/gucciControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllGuccisFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;