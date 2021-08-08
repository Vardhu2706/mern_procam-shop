import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products.filter((p) => p.featured));
    // res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const all_products = await Product.find({});
    const spotlight_products = all_products.filter((p) => p.featured === true);
    if (spotlight_products) {
      res.json(spotlight_products);
    } else {
      res.status(404);
      throw new Error("Product not found.");
    }
  })
);

export default router;
