const express = require('express');
const { getAllCreedsFrontend } = require('../controllers/creedsControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllCreedsFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;