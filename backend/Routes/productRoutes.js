import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import {
  getProducts,
  getProductByID,
  getProductsByCategory,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from "../Controllers/productController.js";
import { protect, admin } from "../Middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
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

router.get("/");

export default router;
