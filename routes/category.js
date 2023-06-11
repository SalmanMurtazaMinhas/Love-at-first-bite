//info 
const express = require('express')
const categoryController = require('../controllers/category')
//router 
const router = express.Router()


const category = require('../lib/isLoggedIn')


//controller_Call_router 
router.get('/category/add',categoryController.category_add_get)
router.post('/category/add',categoryController.category_add_post)
module.exports = router