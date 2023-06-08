const Shop = require("../models/place")

exports.shops_add_get = (req,res)=>{
    res.render('recipe/add')
}

exports.places_add_post = async(req,res)=>{
    try
    {
        const recipe = new recipe(req.body)
        await recipe.save()
        console.log('Payment Done!')
        return res.redirect('/places/add')
    }
    catch(e)
    {
        console.log(e.message)
    }
}

exports.airports_index_get = async (req,res)=>{
    try
    {
        const shops = await Shop.find()
        return res.render('places/index', {shops})
    }
    catch(e)
    {
        console.log(e.message)
    }
}