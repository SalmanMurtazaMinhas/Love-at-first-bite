const User = require('../models/user')


exports.user_index_get = async (req, res) => {
    try{
        const users = await User.find()
        console.log(users)
        res.render('user/index', { users })
        
    } catch (error) {
        console.log(error.message)
        res.send('HMMMMM Something is not right')
    }}