const express = require('express');
const router = express.Router();



const { getAllProducts, getProduct, addProduct } = require('../controllers/productsController')



router.post('/add', addProduct)
router.get('/all', getAllProducts)
router.get('/product/:id', getProduct)

module.exports = router;