const express = require('express');
const { getAllBossesFrontend } = require('../controllers/bossControllersFrontend');

const router = express.Router();
   
    router.get('/', getAllBossesFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;