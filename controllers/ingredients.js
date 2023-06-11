// const Shop = require("../routes//recipe")

// exports.shops_add_get = (req,res)=>{
//     res.render('recipe/add')
// }

// exports.places_add_post = async(req,res)=>{
//     try
//     {
//         const recipe = new recipe(req.body)
//         await recipe.save()
//         console.log('recipe added')
//         return res.redirect('/recipe/add')
//     }
//     catch(e)
//     {
//         console.log(e.message)
//     }
// }

// exports.airports_index_get = async (req,res)=>{
//     try
//     {
//         const recipe = await Shop.find()
//         return res.render('recipe/index', {recipe})
//     }
//     catch(e)
//     {
//         console.log(e.message)
//     }
// }