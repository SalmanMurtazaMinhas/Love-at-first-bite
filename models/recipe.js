const mongoose = require('mongoose')

//Schema Data(document structure)

const recipeSechema = mongoose.Schema({
     title : String,
     discreption : String,
     type :[{
         type: mongoose.Schema.Types.ObjectId,  
         ref: 'category'
         }] ,
   
     recipe : String,
     numberOfCaloires : Number
    })
    
    const recipe = mongoose.model('recipe', recipeSechema)
    

//Exporting the model 
module.exports = recipe