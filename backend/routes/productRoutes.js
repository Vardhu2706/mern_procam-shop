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
    if (products) {
      res.json(products.filter((p) => p.featured));
      // res.json(products);
    } else {
      throw new Error("Products not found.");
    }
  })
);

// @desc Fetch products based on category || brand
// @route GET /api/products/filter/:flag
// @access Public
router.get(
  "/filter/:value",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    const flag = req.params.value;
    console.log(flag);
    const categories = ["cameras", "lenses", "action", "audio"];
    const brands = [
      "Olympus",
      "Blackmagic",
      "Panasonic",
      "Canon",
      "Sigma",
      "Nikon",
      "Fujifilm",
      "Nisi",
      "Hoya",
      "GoPro",
      "Insta360",
      "Ulanzi",
      "RollMaster",
      "Rode",
      "Sony",
      "Tascam",
      "Zoom",
      "LiveU",
      "Sennheiser",
    ];

    // Check filter for category
    if (categories.includes(flag)) {
      const filtered_products = products.filter((p) => p.category === flag);
      if (filtered_products) {
        res.json(filtered_products);
      } else {
        throw new Error("Can't find filtered product");
      }
    } else if (brands.includes(flag)) {
      const filtered_products = products.filter((p) => p.brand === flag);
      if (filtered_products) {
        res.json(filtered_products);
      } else {
        throw new Error("Can't find filtered product");
      }
    } else {
      throw new Error("Can't find filtered product");
    }
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      throw new Error("Can't find product");
    }
  })
);

export default router;
