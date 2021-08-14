import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true });
  res.json(products);
});

const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    throw new Error("Can't find product");
  }
});

const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
});

const getProductsByBrand = asyncHandler(async (req, res) => {
  const products = await Product.find({ brand: req.params.brand });
  res.json(products);
});
export {
  getProducts,
  getProductByID,
  getProductsByCategory,
  getProductsByBrand,
};
