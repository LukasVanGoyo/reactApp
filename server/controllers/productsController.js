const Product = require('../collection/product.js')
const asyncHandler = require('express-async-handler')




const getAllProducts = asyncHandler( async(req, res) => {

  await Product.find({}).populate('addedBy')
      .then(result => {


          res.status(201).json(result)
      })
      .catch(err => {
          res.status(400)
          throw new Error(err.message)
      })




})

const getProduct = asyncHandler(async(req, res) => {
    const id = req.params.id

  await Product.findById({_id: id}, (err, result) =>{

       if(err){

           res.status(400)
           throw new Error(err)
       }
       if(result){
            res.json(result)
       } else {
           res.status(400)
           throw new Error('Podane id jest nieprawidłowe')

       }

    });

})


const addProduct = asyncHandler(async (req, res) => {

    const {  name, price, img, description, category, addedBy  } = req.body;


    const product = await Product.create({
        name,
        price,
        img,
        description,
        category,
        addedBy
    })

    if(product) {
        console.log(product)
        res.status(201).json({
            message: 'Produkt został dodany'
        })
    } else {
        res.status(400)
        throw new Error('Produkt nie został dodany')
    }
})


module.exports = {
    getAllProducts,
    getProduct,
    addProduct
}