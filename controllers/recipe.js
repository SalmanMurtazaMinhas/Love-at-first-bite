const Recipe = require('../models/recipe')
// const user = require('../routes/recipe')
const Category = require('../models/category')
const multer = require("multer");


exports.recipe_add_get = async(req,res)=>{
    const category = await Category.find()
    res.render('recipe/add', {category})
}

exports.recipe_add_post = (req,res)=>{
    console.log(req)
    console.log(req.file)

    const str1 = req.body.title
    str1.toLowerCase()
    const str2 = str1.charAt(0).toUpperCase()+ str1.slice(1)
    req.body.title = str2 
    console.log(req.body.title)

    const recipe = new Recipe(req.body)

    recipe.user = req.user._id
    // const user = new User(req.user.id)

    recipe.image = "/uploads/" + req.file.filename;

    recipe.save().then(()=>{console.log('recipe taken!')
    res.redirect('/recipe/index')})
    .catch((e)=>{
        console.log(e)
    })
}

exports.recipe_index_get = async (req, res) => {
    // req.query.id => dinner / breakfast/ lunch / dessert

    try{

        const id = await Category.find({name: req.query.id})

        if (req.query.id) {
            const recipes = await Recipe.find({category: id}).populate('category')
            res.render('recipe/index', { recipes })
            } else if (req.query.recipetitle) {
                const recipes = await Recipe.find({title: req.query.recipetitle}).populate('category')
            
                
            } else {
            const recipes = await Recipe.find()
            res.render('recipe/index', { recipes })
        }

   
    } catch (error) {
        console.log(error.message)
        res.send('HMMMMM Something is not right')
    }}
    

exports.recipe_myRecipe_get = async (req, res) => {
        // req.query.id => dinner / breakfast/ lunch / dessert
    
        try{
    
        const recipes = await Recipe.find({user: req.user._id}).populate('category')
        res.render('recipe/index', { recipes })
                
        } catch (error) {
            console.log(error.message)
            res.send('HMMMMM Something is not right')
        }}


    




    exports.recipe_index_post = async (req, res) => {
        try{
            const str1 = req.body.title
            str1.toLowerCase()
            const str2 = str1.charAt(0).toUpperCase()+ str1.slice(1)
            req.body.title = str2 
            console.log(req.body.title)
    
            const recipes = await Recipe.find({title: req.body.title})

            if ('title' in recipes[0]) {
                console.log(recipes)
                res.render('recipe/index', { recipes })
        
            } else {
                // append message saying "can't find recipe", use dom manipulation
            }
    
        } catch (error) {
            console.log(error.message)
            res.send('HMMMMM Something is not right')
        }}


    // exports.recipe_edit_get = async (req, res) => {
    //     try {
    //         const recipe = await Recipe.findById(req.query.id)
    //         res.render('recipe/edit', {recipe})
    //     } catch (error) {
    //         console.log(error.message)
    //         res.send(error.message)
    //     }
    // }
    
    exports.recipe_edit_get = async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.query.id)
console.log('recipe edit get Recipes: ', recipe)
    
            res.render('recipe/edit', {recipe})
        } catch (error) {
            console.log(error.message)
            res.send(error.message)
        }
    }
    
    exports.recipe_edit_post = async (req, res) => {
        try {
            console.log(req.body.id)
            await Recipe.findByIdAndUpdate(req.body.id, req.body)
            res.redirect('/recipe/index')
        } catch (error) {
            console.log(error.message)
        }
    }

    exports.recipe_detail_get = async (req, res) => {
        try{
            const recipe = await Recipe.findById(req.query.id)
            console.log(recipe)
            res.render('recipe/detail', { Recipe })
            
        } catch (error) {
            console.log(error.message)
            res.send('HMMMMM Something is not right')
        }}




// exports.recipe_index_get = async (req,res)=>{
//     //Create Api for show books in index
//     const recipe = await Recipe.find().populate('Recipe_id')
    
//     console.log(Recipe)

//     //Render page of flights
//     res.render('recipe/index', {Recipe})
// }

// exports.recipe_delete_post = async (req,res)=>{
//     try
//     { 
//         await recipe.findByIdAndDelete(req.query.id) 
//         res.redirect('/recipe/index')    
//     }
//     catch(e)
//     {
//         console.log(`An error has happend: ${e}`)
//         res.send(e.message)
//     }
// }
// exports.recipe_view_post = async (req,res)=>
// {
//     try
//     { 
//         const recipe = await recipe.findById(req.query.id) 
//         constrecipe = await recipe.find()
//         res.render('recipe/view',{recipe,user})    
//     }
//     catch(e)
//     {
//         console.log(`An error has happend: ${e}`)
//         res.send(e.message)
//     }
// }

// exports.recipe_update_post = async (req,res)=>
// {
//     try
//     { 
//         await recipe.findByIdAndUpdate(req.body.id,req.body) 
//         res.redirect('/recipe/index')    
//     }
//     catch(e)
//     {
//         console.log(`An error has happend: ${e}`)
//         res.send(e.message)
//     }
// }