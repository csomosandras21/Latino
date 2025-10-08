const express = require('express');
const { getAllYslsFrontend } = require('../controllers/yslsControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllYslsFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;