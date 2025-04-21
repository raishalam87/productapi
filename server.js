const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Use Render's dynamic port

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.use(express.json());

// ✅ Add this root route:
app.get('/', (req, res) => {
  res.send("✅ Product API is running!");
});

app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
