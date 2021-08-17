import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./Routes/ProductRoutes.js";
import userRoutes from "./Routes/UserRoutes.js";
import OrderRoutes from "./Routes/OrderRoutes.js";
import { notFound, errorHandler } from "./Middleware/ErrorMiddleware.js";
dotenv.config();
connectDB();

const app = express();

// To accept JSON data in the request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", OrderRoutes); 

app.get(`/api/config/paypal`, (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on post ${PORT}`.black.bgYellow
  )
);
