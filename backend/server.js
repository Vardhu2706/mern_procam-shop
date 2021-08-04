import express from "express";
import dotenv from "dotenv";
import products from "./data/products_new.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// // Get featured products
app.get("/api/featured-products", (req, res) => {
  const featured_products = products.filter((product) => product.featured);
  res.json(featured_products);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV}on post ${PORT}`)
);
