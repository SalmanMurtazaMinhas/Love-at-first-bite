const mongoose = require('mongoose')
const express = require('express') 

//Schema Data(document structure)

const recipeSechema = mongoose.Schema({
     title : String,
     discreption : String,
     category :{
         type: mongoose.Schema.Types.ObjectId,  
         ref: 'category'
         } ,
   
     recipe : String,
     numberOfCaloires : Number,
     image: String
    })
    
    const recipe = mongoose.model('recipe', recipeSechema)
    

//Exporting the model 
module.exports = recipe