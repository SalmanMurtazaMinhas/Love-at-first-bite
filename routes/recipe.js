//info 
const express = require('express')
const recipeController = require('../controllers/recipe')

const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  let upload = multer({ storage: storage })

  
//router 
const router = express.Router()


const isLoggedIn = require('../lib/isLoggedIn')


//controller_Call_router 
router.get('/recipe/add',recipeController.recipe_add_get)
router.post('/recipe/add', upload.single('image'), recipeController.recipe_add_post)
router.get('/recipe/index',recipeController.recipe_index_get)

router.get('/recipe/edit', recipeController.recipe_edit_get)
router.post('/recipe/edit', recipeController.recipe_edit_post)

router.get('/recipe/detail',recipeController.recipe_detail_get)
// router.post('/recipe/detail',recipeController.recipe_detail_post)

// router.post('/recipe/index',recipeController.recipe_delete_post)
// router.get('/recipe/view',recipeController.recipe_view_post)
// router.post('/reciperecipe/view',recipeController.recipe_update_post)
// //export models
module.exports = router