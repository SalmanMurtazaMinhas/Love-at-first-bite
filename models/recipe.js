const mongoose = require('mongoose')

//Schema Data(document structure)

const recipeSechema = mongoose.Schema({
     title : String,
    recipe : String,
    type : String,
    discreption : String,
    numberOfCaloires : Number
})

const recipe = mongoose.model('recipe', recipeSechema)


//Exporting the model 
module.exports = recipe