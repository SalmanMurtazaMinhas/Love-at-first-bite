const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
router.get('/auth/signup', authController.auth_signup_get)
router.get('/auth/login', authController.auth_login_get)
router.post('/auth/signup', authController.auth_signup_post)
router.post('/auth/login', authController.auth_login_post)
router.get('/auth/logout', authController.auth_logout_get)

module.exports = router