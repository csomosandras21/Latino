const express = require('express');
const { getAllValentinosFrontend } = require('../controllers/valentinosControllersFrontedn');

const router = express.Router();
   
    router.get('/', getAllValentinosFrontend);
    // router.get('/:id', getOneUserBackend);
    // router.post('/',  postUserBackend);
    // router.put('/modosit/:id', updateOneUserBackend);
    // router.delete('/torol/:id', deleteOneUserBackend,);

    module.exports = router;