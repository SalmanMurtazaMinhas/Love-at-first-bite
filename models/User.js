const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema=mongoose.Schema({
    username:{type:String, required:true, unique:true, minLength:[2], maxLength:[15]},
    email:{type:String, required:true},
    password:{type:String, required:true}
},
{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password)
{
    //console.log('Verify Password',password)
    return bcrypt.compareSync(password,this.password)
}

const userModel = mongoose.model('User',userSchema)

module.exports = userModel