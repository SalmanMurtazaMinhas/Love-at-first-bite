const express = require('express')
const userController = require('../controllers/user')
 
const router = express.Router()

router.get('/user/index',userController.user_index_get)

module.exports = router