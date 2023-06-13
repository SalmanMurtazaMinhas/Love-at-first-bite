
const bcrypt = require('bcrypt')
const User = require ('../models/user')

exports.user_changepassword_get = (req, res)=>{
    res.render("user/changepassword")
}


exports.user_changepassword_post = async (req, res) => {
    try {
        const newPassword = req.body.newPassword
        const confirmPassword = req.body.confirmPassword
        if(newPassword === confirmPassword) {
            const pass = req.body.newPassword.toString();
            const hash = bcrypt.hashSync(pass, 10)
            await User.findOneAndUpdate({emailAddress: req.body.emailAddress, password: hash})
            res.redirect('/auth/signin')
        } else {
            res.redirect('/');
        }
    }
    catch (err) {
        console.log(err)
        res.send('Cannot Update Password')
    }
}

exports.user_detail_get = async (req, res) => {
    try{
        const user = await User.findById(req.query.id)
        console.log(user)
        res.render('user/detail', { user })
        
    } catch (error) {
        console.log(error.message)
        res.send('HMMMMM Something is not right')
    }}
