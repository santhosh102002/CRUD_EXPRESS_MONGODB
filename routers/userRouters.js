const express = require('express');
const router = express.Router();
const {home,createUser, getUsers, deleteUsers} = require('../controllers/user.controllers')

router.get('/',home)
router.post('/createuser',createUser)
router.get('/getusers',getUsers)
router.delete('/deleteuser/:id',deleteUsers)

module.exports = router