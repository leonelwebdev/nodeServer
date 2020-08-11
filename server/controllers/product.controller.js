// Requires / Consts
const Product = require('../models/product.model')
const productController = { }
const fs = require('fs')
const path = require('path')

// Functions
productController.getProducts = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category })
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

productController.getProduct = async (req, res) => {
    try {
        const product = await Product.find({ id: req.params.id })
        res.json(product[0])
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

productController.getImage = async (req, res) => {
    try {
        const file = req.params.image
        const path_file = await './public/uploads/'+file

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.status(200).sendFile(path.resolve(path_file))
            } else {
                return res.status(404).send({
                    message: 'No existe la imagen'
                })
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// Export
module.exports = productController
