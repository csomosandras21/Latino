const express = require('express');
const { getAllLattafasFrontend } = require('../controllers/lattafaControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllLattafasFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;