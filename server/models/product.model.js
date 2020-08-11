// Requires / Consts
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schematize
const ProductSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Boolean, required: true }
})

// Export
module.exports = mongoose.model('Product', ProductSchema)
