const express = require('express');
const router = express.Router();

const userController =require('../../controller/mysql-controller/user');

router.get('/users',userController.getAllUsers);
router.post('/add-user',userController.addUser);
router.put('/edit-user',userController.editUser);
router.delete('/delete-user/:id',userController.deleteUser);
module.exports =router;