import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import {
  getFeaturedProducts,
  getProductByID,
  getProductsByCategory,
  getProductsByBrand,
} from "../Controllers/productController.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route("/").get(getFeaturedProducts);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.route("/:id").get(getProductByID);

// @desc    Fetch products by category
// @route   GET /api/products/categories/:category
// @access  Public
router.route("/categories/:category").get(getProductsByCategory);

// @desc    Fetch products by brand
// @route   GET /api/products/brands/:brand
// @access  Public
router.route("/brands/:brand").get(getProductsByBrand);

router.get("/");

export default router;
