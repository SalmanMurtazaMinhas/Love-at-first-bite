const express = require('express')
const router = express.Router()
const shopsController = require('../controllers/shops')
const isLoggedIn = require('../lib/isLoggedIn')

router.get('/recipe/add', isLoggedIn,recipeController.recipe_add_get)
router.post('recipe/add',isLoggedIn, recipeController.recipe_add_post)
router.get('/recipe/index',isLoggedIn, recipeController.recipe_index_get)

module.exports = router
