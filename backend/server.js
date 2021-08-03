const express = require("express");
const products = require("./data/products_new");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running.");
});

// // Get featured products
app.get("/api/featured-products", (req, res) => {
  const featured_products = products.filter((product) => product.featured);
  res.json(featured_products);
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.filter((p) => p._id === req.params.id);

  res.json(product);
});

app.listen(5000, console.log("Server Running @ 5000"));
