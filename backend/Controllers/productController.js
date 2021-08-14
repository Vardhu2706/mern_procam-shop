import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// Get All Products
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get Featured Products
const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true });
  res.json(products);
});

// Get Product by ID
const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    throw new Error("Can't find product");
  }
});

// Get Products by category
const getProductsByCategory = asyncHandler(async (req, res) => {
  if (req.params.category === "all") {
    const products = await Product.find({});
    res.json(products);
  } else {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  }
});

const getProductsByBrand = asyncHandler(async (req, res) => {
  const products = await Product.find({ brand: req.params.brand });
  res.json(products);
});
export {
  getFeaturedProducts,
  getProductByID,
  getProductsByCategory,
  getProductsByBrand,
};
