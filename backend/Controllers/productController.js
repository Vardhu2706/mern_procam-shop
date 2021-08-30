import asyncHandler from "express-async-handler";
import Product from "../Models/productModel.js";

// Get All Products
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
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

// Delete Product by ID
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
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

// Create a product
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: "Sample Product name",
    image: "/images/sample.jpg",
    showcase: [],
    features: {},
    subCategory: "Sample Sub Category",
    brand: "Sample brand",
    category: "Sample Brand",
    price: 0,
    countInStock: 0,
    rating: 5,
    numReviews: 0,
    featured: false,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Update Product
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    showcase,
    features,
    subCategory,
    category,
    brand,
    price,
    countInStock,
    rating,
    numReviews,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    // Replace fields
    (product.name = name),
      (product.image = image),
      (product.showcase = showcase),
      (product.features = features),
      (product.subCategory = subCategory),
      (product.category = category),
      (product.brand = brand),
      (product.price = price),
      (product.countInStock = countInStock),
      (product.rating = rating),
      (product.numReviews = numReviews);

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProductByID,
  getProductsByCategory,
  deleteProduct,
  getProducts,
  createProduct,
  updateProduct,
  createProductReview,
};
