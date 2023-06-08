const mongoose = require('mongoose')

//Schema Data(document structure)

const recipeSechema = mongoose.Schema({
    recipe_name: 'recipe', 
    calories: string, 
    recipe_Name: String, 
    recipe_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'recipe ' 
    }
})

const recipe = mongoose.model('recipe', phonsSechema)


//Exporting the model 
module.exports = recipe