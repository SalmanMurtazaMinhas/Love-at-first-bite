const mongoose = require('mongoose')

const categoryShema = mongoose.Schema(
{
name: String }
)

const category = mongoose.model('category',categoryShema)
module.exports = category
 
