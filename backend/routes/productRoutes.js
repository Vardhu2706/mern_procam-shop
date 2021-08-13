import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";
import {
  getProducts,
  getProductByID,
} from "../Controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductByID);
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get("/");

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

export default router;
