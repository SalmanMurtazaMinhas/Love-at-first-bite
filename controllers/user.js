const bcrypt = require('bcrypt')
const User = require ('../models/User')

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
            res.redirect('/user/signin')
        } else {
            res.redirect('/');
        }
    }
    catch (err) {
        console.log(err)
        res.send('Cannot Update Password')
    }
}