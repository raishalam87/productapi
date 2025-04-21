const Product = require('../models/product'); // Import the correct model

// Controller method to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
};

// Controller method to get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err });
  }
};

// Controller method to create a new product
const createProduct = async (req, res) => {
  const { name, image, price, description, rating } = req.body; // ✅ included price here

  try {
    const product = new Product({
      name,
      image,
      price,
      description,
      rating,
    });

    await product.save();
    res.status(201).json(product); // Return the created product
  } catch (err) {
    res.status(400).json({ message: "Error creating product", error: err });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
