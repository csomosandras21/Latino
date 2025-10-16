const express = require('express');
const { getAllBurberrysFrontend } = require('../controllers/burberryControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllBurberrysFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;