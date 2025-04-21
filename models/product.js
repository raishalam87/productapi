const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: {type: Number,required: true},
  description: { type: String, required: true },
  rating: { type: Number, required: true },
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
