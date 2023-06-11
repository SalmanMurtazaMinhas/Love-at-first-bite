// const food = require('../type/food')
// const user = require('../routes/lunch')

// exports.lunch_add_get = async(req,res)=>{
//     const place = await user.find()
//     res.render('lunch/add', {this_lunch_add_get})
// }

// exports.lunch_add_post = (req,res)=>{
//     console.log(req)
//     const lunch = new this.lunch_add_get(req.body)
//     lunch.save().then(()=>{console.log('this is your lunch lunch!')
//     res.redirect('/lunch/index')})
//     .catch((e)=>{
//         console.log(e)
//     })
// }
// exports.lunch_get = async(req,res)=>{
//     //Create Api for show lunch in index
//     const lunch = await lunch.find().populate('lunch_id')
    
//     console.log(lunch)

//     //Render page of flights
//     res.render('lunch/index', {lunch})
// }

// exports.lunch_delete_post = async (req,res)=>{
//     try
//     { 
//         await lunch.findByIdAndDelete(req.query.id) 
//         res.redirect('/lunch/index')    
//     }
//     catch(e)
//     {
//         console.log(`An error has happend: ${e}`)
//         res.send(e.message)
//     }
// }
// exports.lunch_view_post = async (req,res)=>
// {
//     try
//     { 
//         const lunch = await lunch.findById(req.query.id) 
//         constlunch = await lunch.find()
//         res.render('lunch/view',{lunch,user})    
//     }
//     catch(e)
//     {
//         console.log(`An error has happend: ${e}`)
//         res.send(e.message)
//     }
// }

// exports.lunch_update_post = async (req,res)=>
// {
//     try
//     { 
//         await lunch.findByIdAndUpdate(req.body.id,req.body) 
//         res.redirect('/lunch/index')    
//     }
//     catch(e)
//     {
//         console.log(`An error has happend: ${e}`)
//         res.send(e.message)
//     }
// }