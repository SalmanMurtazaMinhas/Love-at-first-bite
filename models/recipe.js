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

     user :{
         type: mongoose.Schema.Types.ObjectId,  
         ref: 'user'
         } ,
   
     recipe : String,
     numberOfCaloires : Number
    })
    
    const recipe = mongoose.model('recipe', recipeSechema)
    

//Exporting the model 
module.exports = recipe