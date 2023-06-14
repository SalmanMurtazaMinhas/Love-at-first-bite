//info 
const express = require('express')
const recipeController = require('../controllers/recipe')

const multer  = require('multer')
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "jpg") {
      cb(null, true);
    } else {
      cb(new Error("File type is wrong... I guess!!"), false);
    }
  };

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });
//router 
const router = express.Router()


const isLoggedIn = require('../lib/isLoggedIn')


//controller_Call_router 
router.get('/recipe/add',recipeController.recipe_add_get)
router.post('/recipe/add', upload.single('uploadedFile'), recipeController.recipe_add_post)

router.get('/recipe/index',recipeController.recipe_index_get)
router.post('/recipe/index',recipeController.recipe_index_post)

router.get('/recipe/edit', recipeController.recipe_edit_get)
router.post('/recipe/edit', recipeController.recipe_edit_post)

router.get('/recipe/detail',recipeController.recipe_detail_get)
// router.post('/recipe/detail',recipeController.recipe_detail_post)
// router.post('/recipe/detail',recipeController.recipe_detail_post)

// router.post('/recipe/index',recipeController.recipe_delete_post)
// router.get('/recipe/view',recipeController.recipe_view_post)
// router.post('/reciperecipe/view',recipeController.recipe_update_post)
// //export models
module.exports = router