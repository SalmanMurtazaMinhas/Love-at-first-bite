const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./lib/passportConfig')

// Get routes 
const indexRoute = require('./routes/index')
const phonesRoute = require('./routes/recipe')
const shopsRoute = require('./routes/shops')
const authRoute = require('./routes/auth')

//Initilize app
const app = express()

//Initilize port 
const PORT = 4003


//Use layouts 
app.use(expressLayouts)


//Use express encoding
app.use(express.urlencoded({
    extended: true
}))


//Use the View
app.set('view engine','ejs')

//use css
app.use(express.static('public'))

//Session
app.use(session({
    secret:'This is secret', 
    saveUninitialized:true, 
    resave:false, 
    cookie:{maxAge:864000000}
}))
//Passport 
app.use(passport.initialize())
app.use(passport.session())

//Current user 
app.use(function(req,res,next)
{
    res.locals.currentUser = req.user
    next()
})
//Mount Routes
app.use('/',indexRoute)
app.use('/',recipeRoute)
app.use('/',shopsRoute)
app.use('/',authRoute)

//Listen to server request 
app.listen(PORT,()=>{
    console.log(`The app is listening to ${PORT}`)
})

// Connect database 
mongoose.connect("mongodb://127.0.0.1:27017/flights")
.then(console.log("App connected to MongoDB"))
.catch((e)=>{
    console.log(`An error occurred: ${e}`)
})