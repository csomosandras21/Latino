const express = require('express');
const { getAllArmanisFrontend } = require('../controllers/armaniControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllArmanisFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;