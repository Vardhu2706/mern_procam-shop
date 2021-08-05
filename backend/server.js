import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// Get product by ID
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.use("/api/products", productRoutes);

// // Get featured products
app.get("/api/featured-products", (req, res) => {
  const featured_products = products.filter((product) => product.featured);
  res.json(featured_products);
});

// // Custom Req
// app.get("/api/:category", (req, res) => {
//   const requested_products = products.filter(
//     (product) => product.category === category
//   );
//   res.json(requested_products);
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on post ${PORT}`.black.bgYellow
  )
);
