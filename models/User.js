const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema=mongoose.Schema({
    username:{type:String, required:true, minLength:[2], maxLength:[15]},
    email:{type:String, required:true},
    password:{type:String, required:true},
    mobile:{type:Number, required:true},
    phone:{type: Number, required:true},
    adress:{type:String, required:true},
},
{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password){
    console.log('Verifying Password: ', password)
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User

// testing