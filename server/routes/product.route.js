// Requires / Consts
const router = require('express').Router()
const productController = require('../controllers/product.controller')

//Routes
router.get('/products/:category', productController.getProducts)
router.get('/product/:id', productController.getProduct)
router.get('/get-image/:image', productController.getImage)

// Export
module.exports = router
