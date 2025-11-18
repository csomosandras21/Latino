const express = require('express');
const{
    getAllUsersBackend,
    postUserBackend,
    getOneUserBackend,
    deleteOneUserBackend,
    updateOneUserBackend,
} = require('../controllers/userControllersBackend');

const router = express.Router();

 
    
    router.get('/', getAllUsersBackend);
    router.get('/:id', getOneUserBackend);
    router.post('/',  postUserBackend);
    router.put('/:id', updateOneUserBackend);
    router.delete('/:id', deleteOneUserBackend,);

    module.exports = router;