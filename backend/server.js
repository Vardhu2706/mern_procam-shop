import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./Middleware/ErrorMiddleware.js";
dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

// // // Get featured products
// app.get("/api/featured-products", (req, res) => {
//   const featured_products = products.filter((product) => product.featured);
//   res.json(featured_products);
// });

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on post ${PORT}`.black.bgYellow
  )
);
