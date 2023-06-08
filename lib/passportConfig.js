const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

passport.serializeUser(function(user,done)
{
    done(null,user.id)
})
passport.deserializeUser(async function(id,done)
{
    try
    {
      const user = await User.findById(id)
      done(null,user)
    }
    catch(e)
    {
        console.log(e.message)
    }
})
passport.use(
    new LocalStrategy({
        usernameField:'username', 
        passwordField:'password'
    },
    async function(username,password,done)
    {
        try
        {
            const user = await User.findOne({username})
            if(!user)
            {
                return done(null,false)
            }
            if(!user.verifyPassword(password))
            {
                return done(null,false)
            }
            return done(null,user)
        }
        catch(e)
        {
            console.log(e.message)
        }
    })
    )

module.exports = passport