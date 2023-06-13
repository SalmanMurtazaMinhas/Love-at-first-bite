const Category = require('../models/category')
// const user = require('../routes/recipe')

exports.category_add_get = async(req,res)=>{
    const category = await Category.find()
    res.render('category/add', {category})
}

exports.category_add_post = (req,res)=>{
    console.log(req)
    const category = new Category(req.body)
    category.save().then(()=>{console.log('catogory saved!')
})
    .catch((e)=>{
        console.log(e)
    })
}

