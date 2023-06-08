// Get info 
const express = require('express')
const indexController = require('../controllers/index')
// Get router 
const router = express.Router()


//controller_Call_router 
router.get('/',indexController.index_get)

//export models
module.exports = router