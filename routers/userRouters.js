const express = require('express');
const router = express.Router();
const {home,createUser, getUsers, deleteUsers, updateUsers} = require('../controllers/user.controllers')

router.get('/',home)
router.post('/createuser',createUser)
router.get('/getusers',getUsers)
router.delete('/deleteuser/:id',deleteUsers)
router.put('/updateuser/:id',updateUsers)

module.exports = router