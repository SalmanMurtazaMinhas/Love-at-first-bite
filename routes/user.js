const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const userController = require('../controllers/user')
router.get('/user/changepassword', userController.user_changepassword_get)
router.post('/user/changepassword', userController.user_changepassword_post)

module.exports = router