const express = require('express');
const { getAllDiorsFrontend } = require('../controllers/diorsControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllDiorsFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;