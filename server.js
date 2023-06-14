const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./lib/passportConfig')


// Get routes 
const indexRoute = require('./routes/index')
const recipeRoute = require('./routes/recipe')
const authRoute = require('./routes/auth')
const categoryRoute = require('./routes/category')
const userRoute = require('./routes/user')

const breakfastRoute = require('./routes/breakfast')
const lunchRoute = require('./routes/lunch')
const dinnerRoute = require('./routes/dinner')
const dessertRoute = require('./routes/dessert')

//Initilize app
const app = express()

//Initilize port 
const PORT = 4000


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
    cookie:{maxAge:777000000}
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
app.use('/',authRoute)
app.use('/',categoryRoute)
app.use('/', userRoute)


app.use('/', userRoute)

app.use('/',breakfastRoute)
app.use('/',lunchRoute)
app.use('/',dessertRoute)


//Listen to server request 
app.listen(PORT,()=>{
    console.log(`The app is listening to ${PORT}`)
})

// Connect database 
mongoose.connect("mongodb+srv://salman:group08@project02.wkhpqh8.mongodb.net/LoveAtFirstBite")
.then(console.log("App connected to MongoDB"))
.catch((e)=>{
    console.log(`An error occurred: ${e}`)
})