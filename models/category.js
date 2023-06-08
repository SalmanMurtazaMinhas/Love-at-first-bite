const mongoose = require('mongoose')

const categoryShema = mongoose.Schema({
    name: String, 
    category_id:Number, 
    phone : [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'category'
    }]
})

const category = mongoose.model('category',categoryShema)
module.exports = category
 
