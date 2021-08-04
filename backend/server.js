const express = require("express");
const products = require("./data/products_new");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running.");
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

app.listen(5000, console.log("Server running on post 5000"));
