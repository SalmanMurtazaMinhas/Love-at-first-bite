const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('../lib/passportConfig')

exports.auth_signup_get = (req,res)=>{
    res.render('auth/signup')
}
exports.auth_login_get = (req,res)=>{
    res.render('auth/login')
}
exports.auth_signup_post = async (req,res)=>{
    try
    {
        const user = new User(req.body)
        const hash = bcrypt.hashSync(req.body.password,10)
        user.password = hash
        await user.save()
        console.log('User added successfuly!')
        res.redirect('/')
    }
    catch(e)
    {
        console.log(e.message)
    }
}
exports.auth_login_post = passport.authenticate("local", {
    successRedirect:'/',
    failureRedirect:'/auth/login'
})

exports.auth_logout_get = (req,res,next)=>
{
   // req.session.destroy()
    req.logout(function(e){
        if(e)
        return next()
        else 
        {
        res.redirect('/auth/login')
        }

    })
}
