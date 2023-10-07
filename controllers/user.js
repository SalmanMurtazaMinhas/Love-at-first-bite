
const bcrypt = require('bcrypt')
const User = require ('../models/User')

exports.user_changepassword_get = (req, res)=>{
    res.render("user/changepassword")
}


exports.user_changepassword_post = async (req, res) => {
    try {
        const newPassword = req.body.newPassword
        const confirmPassword = req.body.confirmPassword
        const currentPassword = req.body.password
        
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


    exports.user_edit_get = async (req, res) => {
        try {
            const user = await User.findById(req.query.id)
console.log('User edit get Users: ', user)
    
            res.render('user/edit', {user})
        } catch (error) {
            console.log(error.message)
            res.send(error.message)
        }
    }
    
    exports.user_edit_post = async (req, res) => {
        try {
            console.log(req.body.id)
            await User.findByIdAndUpdate(req.body.id, req.body)
            res.redirect('/')
        } catch (error) {
            console.log(error.message)
        }
    }