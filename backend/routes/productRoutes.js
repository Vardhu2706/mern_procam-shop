import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import {
  getAllProducts,
  getProductByID,
  getProductsByCategory,
  getProductsByBrand,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from "../Controllers/productController.js";
import { protect, admin } from "../Middleware/AuthMiddleware.js";

router.route("/").get(getAllProducts).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);

router
  .route("/:id")
  .get(getProductByID)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

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
