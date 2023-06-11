const food = require('../type/food')
const user = require('../routes/recipe')

exports.food_add_get = async(req,res)=>{
    const place = await user.find()
    res.render('food/add', {recipe})
}

exports.recipe_add_post = (req,res)=>{
    console.log(req)
    const recipe = new recipe(req.body)
    recipe.save().then(()=>{console.log('recipe taken!')
    res.redirect('/recipe/index')})
    .catch((e)=>{
        console.log(e)
    })
}
exports.recipe_get = async(req,res)=>{
    //Create Api for show books in index
    const recipe = await recipe.find().populate('recipe_id')
    
    console.log(recipe)

    //Render page of flights
    res.render('recipe/index', {recipe})
}

exports.recipe_delete_post = async (req,res)=>{
    try
    { 
        await recipe.findByIdAndDelete(req.query.id) 
        res.redirect('/recipe/index')    
    }
    catch(e)
    {
        console.log(`An error has happend: ${e}`)
        res.send(e.message)
    }
}
exports.recipe_view_post = async (req,res)=>
{
    try
    { 
        const recipe = await recipe.findById(req.query.id) 
        constrecipe = await recipe.find()
        res.render('recipe/view',{recipe,user})    
    }
    catch(e)
    {
        console.log(`An error has happend: ${e}`)
        res.send(e.message)
    }
}

exports.recipe_update_post = async (req,res)=>
{
    try
    { 
        await recipe.findByIdAndUpdate(req.body.id,req.body) 
        res.redirect('/recipe/index')    
    }
    catch(e)
    {
        console.log(`An error has happend: ${e}`)
        res.send(e.message)
    }
}