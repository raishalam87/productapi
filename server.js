const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');  // Import product routes

dotenv.config();

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.use(express.json());  // For parsing JSON bodies

// Use the product routes
app.use('/api/products', productRoutes);  // This ensures the routes work under "/api/products"

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
