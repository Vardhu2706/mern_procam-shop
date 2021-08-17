import express from "express";
const router = express.Router();
import { addOrderItems } from "../Controllers/OrderController.js";
import { protect } from "../Middleware/AuthMiddleware.js";

router.route("/").post(protect, addOrderItems);
export default router;
